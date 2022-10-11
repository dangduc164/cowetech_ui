//custom input upload file paga contact

$("#FileInput").on('change', function(e) {
    let labelVal = $(".title").text();
    let oldfileName = $(this).val();
    fileName = e.target.value.split('\\').pop();

    if (oldfileName == fileName) { return false; }
    let extension = fileName.split('.').pop();

    //check file
    if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
        $(".filelabel i").removeClass().addClass('fa fa-file-image-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#208440' });
        $(".filelabel").css({ 'border': ' 2px solid #208440' });
    } else if (extension == 'pdf') {
        $(".filelabel i").removeClass().addClass('fa fa-file-pdf-o');
        $(".filelabel i, .filelabel .title").css({ 'color': 'red' });
        $(".filelabel").css({ 'border': ' 2px solid red' });

    } else if (extension == 'doc' || extension == 'docx') {
        $(".filelabel i").removeClass().addClass('fa fa-file-word-o');
        $(".filelabel i, .filelabel .title").css({ 'color': '#2388df' });
        $(".filelabel").css({ 'border': ' 2px solid #2388df' });
    } else {
        $(".filelabel i").removeClass().addClass('fa fa-file-o');
        $(".filelabel i, .filelabel .title").css({ 'color': 'black' });
        $(".filelabel").css({ 'border': ' 2px solid black' });
    }

    // show name file
    if (fileName) {
        if (fileName.length > 30) {
            $(".filelabel .title").text(fileName.slice(0, 30) + '...' + extension);
        } else {
            $(".filelabel .title").text(fileName);
        }
    } else {
        $(".filelabel .title").text(labelVal);
    }
});