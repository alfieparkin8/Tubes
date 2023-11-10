document.addEventListener('click', function(event) {
    const parentElement = event.target.parentElement;
    if (parentElement && parentElement.id) {
      console.log('Parent element ID: ' + parentElement.id);
    } else {
      console.log('No parent element with an ID found.');
    }

    if(parentElement.id === "kings-x-disabled-1"){
        var imageUrl = "kings_cross.jpg";
        window.open(imageUrl, "_blank");
    }
  });
