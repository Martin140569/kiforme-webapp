function generatePDF() {
  const element = document.body;
  const opt = {
    margin: 0.5,
    filename: 'Tagesreport_KI.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {},
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
}