// hold application data as an array of objects
var friends = [
  {
    name: 'The Tennis Player',
    photo: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww4.pictures.zimbio.com%2Fgi%2FSharona%2BYoung%2BInvictus%2BGames%2BToronto%2B2017%2BLEGFQK6O3Lfl.jpg&imgrefurl=http%3A%2F%2Fwww.zimbio.com%2Fphotos%2FSharona%2BYoung%2FInvictus%2BGames%2BToronto%2B2017%2BDay%2B1%2FLEGFQK6O3Lf&docid=Bw3xRY-IPrRGdM&tbnid=fMBfWCcrR4xCPM%3A&vet=10ahUKEwi_j8zXnOPYAhVKZawKHWtQBl0QMwhEKAUwBQ..i&w=420&h=600&itg=1&bih=790&biw=824&q=sharona%20young&ved=0ahUKEwi_j8zXnOPYAhVKZawKHWtQBl0QMwhEKAUwBQ&iact=mrc&uact=8",
          
    score: [
      4,
      5,
      1,
      4,
      5,
      2,
      5,
      1,
      5,
      5
    ]
  }
];
// should include name, photo, scores

// Convert each user's results into a simple array of numbers 

// compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`

  // The closest match will be the user with the least amount of difference.

// Display the result as a modal pop-up, show name and picture of closest match
module.exports=friends;