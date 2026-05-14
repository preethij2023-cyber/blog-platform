function addComment(){

    let input = document.getElementById("commentInput");

    let comment = input.value;

    if(comment === ""){
        alert("Please enter a comment");
        return;
    }

    let li = document.createElement("li");

    li.innerText = comment;

    document.getElementById("commentList").appendChild(li);

    input.value = "";
}