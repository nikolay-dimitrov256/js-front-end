function solve() {
  // Get elements
  const textAreaElement = document.getElementById('input');
  const resultElement = document.getElementById('output');

  // Get text
  const text = textAreaElement.value;

  // Process text
  const sentences = text.split('.');
  let paragraphs = [];
  
  for (let i = 0; i < sentences.length; i += 3) {
    const paragraph = sentences
                              .slice(i, i+3)
                              .reduce((acc, sentence) => {
                                if (sentence) {
                                  acc.push(sentence);
                                }

                                return acc
                              }, []);
                
    if (paragraph.length > 0) {
      paragraphs.push(`<p>${paragraph.join('.')}.</p>`)
    }
  }

  const outputCode = paragraphs.join('\n');

  // Output text
  resultElement.innerHTML = outputCode;
}