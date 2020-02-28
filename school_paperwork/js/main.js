/*Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25

*/
function paperwork(n, m) {
  if (m <=0 || n<=0){
   m= Math.abs(m)
   n = Math.abs(n)
   return 0
  }
    return n*m
  }
paperwork(5,5) //, 25, 'Failed at paperwork(5, 5)')