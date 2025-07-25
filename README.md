# MOD10 Matches Analyzer

Ity dia application web tsotra natao ho an'ny fanadihadiana pattern mod10 amin'ny cotes Over/Under amin'ny matchs amin'ny alalan'ny capture d'écran.

## 🎯 Tanjona

- Mandray sary capture d'écran misy cotes sy anaran'ny équipe.
- Manao **OCR** (Optical Character Recognition) amin'ny sary ho fakana automatique ireo cotes Over/Under sy anaran'ny équipe.
- Manisa **modulo 10** amin'ny décimale-n'ny cote tsirairay.
- Manamarina raha misy matchs hafa mitovy na manakaiky (±1) mod10 amin'ny base de données.
- Mampiseho ny matchs mitovy pattern na manakaiky amin'ny UI.

## 📸 Fampiasana

1. **Upload**-o ny capture d'écran misy cotes sy anaran'ny équipe (azo atao maro).
2. Tsindrio ny bouton **Analyze**.
3. Hiseho ny valin'ny OCR sy ny mod10 calcul ho an'ny Over/Under.
4. Raha misy pattern mitovy na manakaiky amin'ny base de données dia hiseho lisitra ireo matchs mitovy.

## 💡 Ohatra Calcul

- **Match 1 :** Over 1.17 → Décimale = 17 → mod10 = 7
- **Match 2 :** Under 2.33 → Décimale = 33 → mod10 = 3
- **Pattern total :** 73

## 🖥️ Interface

- Sary capture no ampidirina, tsy ilaina saisie anaran'ny équipe na cotes.
- UI simple : bouton upload sy analyze, valiny hiseho etsy ambany.
- Valiny : lisitry ny matchs sy pattern mod10 mitovy/akaiky.

## 🔗 Deployment amin'ny GitHub Pages

1. Mamorona repository amin'ny GitHub (ohatra : `mod10-matches`).
2. Apetraho ao ny rakitra : `index.html`, `main.js`, `style.css`, ary `README.md`.
3. Mandehana amin'ny **Settings → Pages**.
4. Safidio ny branch ("main") sy folder ("root").
5. Jereo amin'ny URL : `https://username.github.io/mod10-matches/`

## ⚡ Fanamarihana

- Raha static site (HTML/CSS/JS), azo deploy-na mivantana amin'ny GitHub Pages.
- Raha mila backend Python na OCR server-side, dia mila service externe (Render, Vercel, HuggingFace Spaces, ...).
- Azonao ampiasaina **Tesseract.js** amin'ny navigateur ho an'ny OCR.

---

## 📚 Resources

- [GitHub Pages Guide](https://pages.github.com/)
- [Tesseract.js OCR](https://tesseract.projectnaptha.com/)

---

**Natao ho an'ny fanadihadiana pattern mod10 amin'ny cotes Over/Under. Tsy manome prédiction, fa identification de tendance fotsiny.**
