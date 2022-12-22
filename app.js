const b = document.getElementById("upload");
const d = document.getElementById("download");
const c = document.getElementById("result");
const s = document.getElementById("ratio");

let p = s.value;
let o = "";

b.addEventListener("click", () => {
  const r = document.createElement("input");
  r.type = "file";
  r.accept = "image/*";
  r.click();
  r.addEventListener("change", () => {
    const file = r.files[0];
    loadImage(
      file,
      (img) => {
        o = img.src;
        c.src = o;
        d.style.display = "inline-block";
        c.style.display = "inline-block";
        s.style.display = "inline-block";
        d.addEventListener("click", () => {
          const a = document.createElement("a");
          a.href = o;
          a.download = "shakal.jpg";
          a.click();
        });
      },
      {
        canvas: true,
      }
    );
  });
});

c.addEventListener("load", () => {
  p = s.value;
});

s.addEventListener("input", () => {
  if (s.value !== p) {
    p = s.value;
    const r = new Image();
    r.src = o;
    r.onload = () => {
      const i = document.createElement("canvas");
      i.width = r.naturalWidth;
      i.height = r.naturalHeight;
      const t = i.getContext("2d");
      t.drawImage(r, 0, 0);
      const n = s.value / 100;
      const e = i.toDataURL("image/jpeg", n);
      c.src = e;
    };
  } else c.src = o;
});
