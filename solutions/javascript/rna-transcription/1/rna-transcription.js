//
// 'RNA Transcription'
//

export const toRna = (dnaSequence) => {
  let rnaSequence = [];
  
  let dnaSeq2Review = dnaSequence.trim().toUpperCase().split('');
  for(let i = 0; i< dnaSeq2Review.length; i++){
    switch(dnaSeq2Review[i]){
      case 'G':
        rnaSequence.push('C');
        break;
      case 'C':
        rnaSequence.push('G');
        break;
      case 'T':
        rnaSequence.push('A');
        break;
      case 'A':
        rnaSequence.push('U');
        break;
      default:
        rnaSequence.push('');
        break;
    }
  }
  return rnaSequence.join('');
};
