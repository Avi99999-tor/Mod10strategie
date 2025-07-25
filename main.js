// main.js: Dummy JS for MOD10 Matches Analyzer

function analyzeImages() {
  const input = document.getElementById('imageInput');
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!input.files.length) {
    resultsDiv.innerHTML = '<p style="color:red;">Tsy misy sary voafidy.</p>';
    return;
  }

  for (let i = 0; i < input.files.length; i++) {
    const file = input.files[i];
    // Mampiseho anarana sary, fa dummy fotsiny (tsy mbola misy OCR)
    const reader = new FileReader();
    reader.onload = function(e) {
      resultsDiv.innerHTML += `
        <div style="margin:10px 0;">
          <strong>Sary ${i+1}: ${file.name}</strong><br>
          <img src="${e.target.result}" alt="Sary" style="max-width:200px;display:block;margin-bottom:5px;">
          <em>OCR sy mod10 analyzer: tsy mbola misy, mila apetraka Tesseract.js na backend OCR.</em>
        </div>
      `;
    };
    reader.readAsDataURL(file);
  }
}
