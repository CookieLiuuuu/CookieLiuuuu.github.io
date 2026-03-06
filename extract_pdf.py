from pathlib import Path

from pypdf import PdfReader

pdf_path = Path(r"c:\Users\86186\Desktop\Certificate\中文cv\AI实习生-刘光辉.pdf")
out_path = Path(r"d:\Vibe Coding\Self-Introduction\resume_extracted.txt")

reader = PdfReader(str(pdf_path))
parts = []
for i, page in enumerate(reader.pages, start=1):
    text = (page.extract_text() or "").strip()
    parts.append(f"\n===== PAGE {i} =====\n{text}")

content = "".join(parts)
out_path.write_text(content, encoding="utf-8")

print(f"pages={len(reader.pages)}")
print(f"saved={out_path}")
