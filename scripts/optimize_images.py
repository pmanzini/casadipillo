"""Generate web-ready image variants while preserving the original assets."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path

from PIL import Image, ImageOps

SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--source",
        type=Path,
        default=Path("src/casadipilloapp/src/assets/images"),
        help="Directory containing the original images.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("src/casadipilloapp/src/assets/optimized"),
        help="Directory where optimized variants are written.",
    )
    parser.add_argument("--carousel-width", type=int, default=640)
    parser.add_argument("--slideshow-width", type=int, default=1600)
    parser.add_argument("--carousel-quality", type=int, default=76)
    parser.add_argument("--slideshow-quality", type=int, default=84)
    return parser.parse_args()


def optimize_image(source: Path, destination: Path, max_width: int, quality: int) -> None:
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert("RGB")
        if image.width > max_width:
            height = round(image.height * max_width / image.width)
            image = image.resize((max_width, height), Image.Resampling.LANCZOS)
        destination.parent.mkdir(parents=True, exist_ok=True)
        image.save(
            destination,
            format="WEBP",
            quality=quality,
            method=6,
            optimize=True,
        )


def generate_variant(
    source: Path,
    output: Path,
    variant: str,
    max_width: int,
    quality: int,
) -> int:
    generated = 0
    for image_path in sorted(source.rglob("*")):
        if not image_path.is_file() or image_path.suffix.lower() not in SUPPORTED_EXTENSIONS:
            continue
        relative_path = image_path.relative_to(source).with_suffix(".webp")
        optimize_image(image_path, output / variant / relative_path, max_width, quality)
        generated += 1
    return generated


def main() -> None:
    args = parse_args()
    if not args.source.is_dir():
        raise SystemExit(f"Source directory does not exist: {args.source}")

    if args.output.exists():
        shutil.rmtree(args.output)

    carousel_count = generate_variant(
        args.source, args.output, "carousel", args.carousel_width, args.carousel_quality
    )
    slideshow_count = generate_variant(
        args.source, args.output, "slideshow", args.slideshow_width, args.slideshow_quality
    )
    print(f"Generated {carousel_count} carousel images and {slideshow_count} slideshow images.")
    print(f"Output: {args.output}")


if __name__ == "__main__":
    main()
