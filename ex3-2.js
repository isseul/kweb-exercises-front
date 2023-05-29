const getDivisors = x => {
  const num = [];
  const rootx = Math.sqrt(x);
  for (let i=1; i<=rootx; i++){
    if (x%i===0) {
      num.push(i);
    }
  }
  const newnum = num.map(d => x/d);
  const len = num.length;
  if (num[len]===newnum[len]) {newnum.pop()}
  result = num.concat(newnum);
  result.sort();

  return result;
}