//Global variables
StringBuilder tempSolution;
ArrayList<String> result;
String letters[];
 
ArrayList<String> letterCombinations(String digits)
{
    //Our map, we use the digit as an index to get the corresponding set of letters
    letters = new String[]{"", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"};
    result = new ArrayList<String>();
    //tempSolution is used to build the solution on the fly
    tempSolution = new StringBuilder("");
    //here we call dfs function starting with digit at position zero
    backtracking(digits, 0);
    return result;
}
void backtracking(String digits, int i) // variable i points the current digit
{
    //We get the set of corresponding letters for the current digit
    String setOfLetters = letters[digits.charAt(i) - 48];
 
    //Now we loop through the set of letters
    for(int a = 0; a < setOfLetters.length(); ++a)
    {
        //Append each one of the letters to our temporary solution
        tempSolution.append(setOfLetters.charAt(a));
        //have we finished?, if so, add this temporary combination to our resulting ArrayList
        if(i == digits.length() - 1)
            result.add(tempSolution.toString());
        else //otherwise call this function recursively but now with the next digit as current digit
            backtracking(digits, i + 1);
 
        //Here is where the magic of backtracking happens
        tempSolution.deleteCharAt(st.length() - 1);
    }
}