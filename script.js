var page = null;
var action = null;
var confirmButtonHandle = null;
var index = null;

function confirmButtonAdd() {
    let data = null;
    if(page == "upcomingEvents") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'add',
            page: 'upcomingEvents',
            month: document.getElementById("monthSelect").value,
            day: document.getElementById("dayField").value,
            year: document.getElementById("yearField").value,
            eventTime : document.getElementById("eventTimeField").value,
            eventImage: document.getElementById("eventImageField").value,
            eventName: document.getElementById("eventNameField").value,
            eventLocation: document.getElementById("eventLocationField").value,
            eventLink: document.getElementById("eventLinkField").value
        };
    }
    else if(page == "photoGallery") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'add',
            page: 'photoGallery',
            photoUrl: document.getElementById("photoUrlField").value,
            photoTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(page == "musicAndVideos") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'add',
            page: 'musicAndVideos',
            videoPreviewUrl: document.getElementById("vieoPreviewUrlField").value,
            videoUrl: document.getElementById("videoUrlField").value,
            videoTitle: document.getElementById("videoTitleField").value
        };
    }
    //TEST CODE
    console.log(data);
    window.confirm(data);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    }).then(response => response.json())
        .then(data => {
            console.log("post: ");
            console.log(data);
            window.confirm(data);
            page = null;
            action = null;
        });
    
    confirmButtonHandle = null;
    
    let removeMonthOptions = document.getElementById("monthSelect");
    while(removeMonthOptions.hasChildNodes()) {
        removeMonthOptions.removeChild(removeMonthOptions.firstChild);
    }

    let removeAddFormElements = document.getElementById("addForm");
    while(removeAddFormElements.hasChildNodes()) {
        removeAddFormElements.removeChild(removeAddFormElements.firstChild);
    }

    let removeFormContainerElements = document.getElementById("formContainer");
    while(removeFormContainerElements.hasChildNodes()) {
        removeFormContainerElements.removeChild(removeFormContainerElements.firstChild);
    }
}

function confirmButtonGetRequest() {
    let data = {
        password: document.getElementById("serverPasswordField").value,
        action: 'getRequest',
        page: page,
        index: document.getElementById('getRequestIndex').value
    };
    //TEST CODE
    console.log(data);
    window.confirm("sometext");
    window.confirm(data);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    }).then(response => response.json())
        .then(data => {
            confirmButtonHandle = null;
            let removeGetRequestFormElements = document.getElementById("getRequestForm");
            while(removeGetRequestFormElements.hasChildNodes()) {
                removeGetRequestFormElements.removeChild(removeGetRequestFormElements.firstChild);
            }
            let removeFormContainerElements = document.getElementById("formContainer");
            while(removeFormContainerElements.hasChildNodes()) {
                removeFormContainerElements.removeChild(removeFormContainerElements.firstChild);
            }
            if(action == "edit")
                setFormContainerEdit(data);
            else if(action == "delete")
                setFormContainerDelete(data);
        });
}

function confirmButtonEdit() {
    let data = null;
    if(page == "upcomingEvents") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'edit',
            page: 'upcomingEvents',
            index: index,
            month: document.getElementById("monthSelect").value,
            day: document.getElementById("dayField").value,
            year: document.getElementById("yearField").value,
            eventTime: document.getElementById("eventTimeField").value,
            eventImage: document.getElementById("eventImageField").value,
            eventName: document.getElementById("eventNameField").value,
            eventLocation: document.getElementById("eventLocationField").value,
            eventLink: document.getElementById("eventLinkField").value
        };
    }
    else if(page == "photoGallery") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'edit',
            page: 'photoGallery',
            photoUrl: document.getElementById("photoUrlField").value,
            photoTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(page == "musicAndVideos") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'edit',
            page: 'musicAndVideos',
            videoPreviewUrl: document.getElementById("vieoPreviewUrlField").value,
            videoUrl: document.getElementById("videoUrlField").value,
            videoTitle: document.getElementById("videoTitleField").value
        };
    }
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    }).then(response => response.json())
        .then(data => {
            console.log("post: ");
            console.log(data);
            page = null;
            action = null;
            index = null;
        });
    
    confirmButtonHandle = null;
    
    let removeMonthOptions = document.getElementById("monthSelect");
    while(removeMonthOptions.hasChildNodes()) {
        removeMonthOptions.removeChild(removeMonthOptions.firstChild);
    }

    let removeEditFormElements = document.getElementById("editForm");
    while(removeEditFormElements.hasChildNodes()) {
        removeEditFormElements.removeChild(removeEditFormElements.firstChild);
    }

    let removeFormContainerElements = document.getElementById("formContainer");
    while(removeFormContainerElements.hasChildNodes()) {
        removeFormContainerElements.removeChild(removeFormContainerElements.firstChild);
    }
}

function confirmButtonDelete() {
    let data = null;
    if(page == "upcomingEvents") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'upcomingEvents',
            index: index
        };
    }
    else if(page == "photoGallery") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'photoGallery',
            deleteTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(page == "musicAndVideos") {
        data = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'musicAndVideos',
            deleteTitle: document.getElementById("videoTitleField").value
        };
    }
    window.confirm(data);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    }).then(response => response.json())
        .then(data => {
            console.log("post: ");
            console.log(data);
            page = null;
            action = null;
            index = null;
        });
    
    confirmButtonHandle = null;
    
    let removeMonthOptions = document.getElementById("monthSelect");
    while(removeMonthOptions.hasChildNodes()) {
        removeMonthOptions.removeChild(removeMonthOptions.firstChild);
    }

    let removeDeleteFormElements = document.getElementById("deleteForm");
    while(removeDeleteFormElements.hasChildNodes()) {
        removeDeleteFormElements.removeChild(removeDeleteFormElements.firstChild);
    }

    let removeFormContainerElements = document.getElementById("formContainer");
    while(removeFormContainerElements.hasChildNodes()) {
        removeFormContainerElements.removeChild(removeFormContainerElements.firstChild);
    }
}

function setConfirmButtonEventAdd() {
    confirmButtonHandle = document.getElementById("confirmButton");
    confirmButtonHandle.addEventListener("click", confirmButtonAdd);
}

function setConfirmButtonEventGetRequest() {
    confirmButtonHandle = document.getElementById("confirmButton");
    confirmButtonHandle.addEventListener("click", confirmButtonGetRequest);
}

function setFormContainerAdd() {
    const addForm = document.createElement('form');
    addForm.setAttribute('id', "addForm");

    const serverUrlText = document.createElement('p');
    serverUrlText.setAttribute('id', "serverUrlText");
    serverUrlText.innerHTML = "server url";
    const serverUrlField = document.createElement("input");
    serverUrlField.setAttribute('id', "serverUrlField");
    serverUrlField.setAttribute('type', "text");
    
    const serverPasswordText = document.createElement('p');
    serverPasswordText.setAttribute('id', "serverUrlText");
    serverPasswordText.innerHTML = "server password";
    const serverPasswordField = document.createElement("input");
    serverPasswordField.setAttribute('id', "serverPasswordField");
    serverPasswordField.setAttribute('type', "password");

    addForm.appendChild(serverUrlText);
    addForm.appendChild(serverUrlField);
    addForm.appendChild(serverPasswordText);
    addForm.appendChild(serverPasswordField);

    if(page == "upcomingEvents") {
        const monthText = document.createElement('p');
        monthText.setAttribute('id', "monthText");
        monthText.innerHTML = "month";
        const monthSelect = document.createElement("select");
        monthSelect.setAttribute("id", "monthSelect");
        
        const monthJan = document.createElement('option');
        monthJan.setAttribute('id', "monthJan");
        monthJan.setAttribute("value", "Jan");
        monthJan.innerHTML = "Jan";

        const monthFeb = document.createElement('option');
        monthFeb.setAttribute('id', "monthFeb");
        monthFeb.setAttribute("value", "Feb");
        monthFeb.innerHTML = "Feb";

        const monthMar = document.createElement('option');
        monthMar.setAttribute('id', "monthMar");
        monthMar.setAttribute("value", "Mar");
        monthMar.innerHTML = "Mar";

        const monthApr = document.createElement('option');
        monthApr.setAttribute('id', "monthApr");
        monthApr.setAttribute("value", "Apr");
        monthApr.innerHTML = "Apr";

        const monthMay = document.createElement('option');
        monthMay.setAttribute('id', "monthMay");
        monthMay.setAttribute("value", "May");
        monthMay.innerHTML = "May";

        const monthJun = document.createElement('option');
        monthJun.setAttribute('id', "monthJun");
        monthJun.setAttribute("value", "Jun");
        monthJun.innerHTML = "Jun";

        const monthJul = document.createElement('option');
        monthJul.setAttribute('id', "monthJul");
        monthJul.setAttribute("value", "Jul");
        monthJul.innerHTML = "Jul";

        const monthAug = document.createElement('option');
        monthAug.setAttribute('id', "monthAug");
        monthAug.setAttribute("value", "Aug");
        monthAug.innerHTML = "Aug";

        const monthSep = document.createElement('option');
        monthSep.setAttribute('id', "monthSep");
        monthSep.setAttribute("value", "Sep");
        monthSep.innerHTML = "Sep";

        const monthOct = document.createElement('option');
        monthOct.setAttribute('id', "monthOct");
        monthOct.setAttribute("value", "Oct");
        monthOct.innerHTML = "Oct";

        const monthNov = document.createElement('option');
        monthNov.setAttribute('id', "monthNov");
        monthNov.setAttribute("value", "Nov");
        monthNov.innerHTML = "Nov";

        const monthDec = document.createElement('option');
        monthDec.setAttribute('id', "monthDec");
        monthDec.setAttribute("value", "Dec");
        monthDec.innerHTML = "Dec";

        const dayText = document.createElement('p');
        dayText.setAttribute('id', "dayText");
        dayText.innerHTML = "day";
        const dayField = document.createElement("input");
        dayField.setAttribute('id', "dayField");
        dayField.setAttribute('type', "text");

        const yearText = document.createElement('p');
        yearText.setAttribute('id', "yearText");
        yearText.innerHTML = "year";
        const yearField = document.createElement("input");
        yearField.setAttribute("id", "yearField");
        yearField.setAttribute('type', "text");

        const eventTimeText = document.createElement('p');
        eventTimeText.setAttribute('id', "eventTimeText");
        eventTimeText.innerHTML = "event time";
        const eventTimeField = document.createElement("input");
        eventTimeField.setAttribute("id", "eventTimeField");
        eventTimeField.setAttribute('type', "text");

        const eventImageText = document.createElement('p');
        eventImageText.setAttribute('id', "eventImageText");
        eventImageText.innerHTML = "event image url";
        const eventImageField = document.createElement("input");
        eventImageField.setAttribute("id", "eventImageField");
        eventImageField.setAttribute('type', "text");

        const eventNameText = document.createElement('p');
        eventNameText.setAttribute('id', "eventNameText");
        eventNameText.innerHTML = "event name";
        const eventNameField = document.createElement("input");
        eventNameField.setAttribute("id", "eventNameField");
        eventNameField.setAttribute('type', "text");

        const eventLocationText = document.createElement('p');
        eventLocationText.setAttribute('id', "eventLocationText");
        eventLocationText.innerHTML = "event location";
        const eventLocationField = document.createElement("input");
        eventLocationField.setAttribute("id", "eventLocationField");
        eventLocationField.setAttribute('type', "text");

        const eventLinkText = document.createElement('p');
        eventLinkText.setAttribute('id', "eventLinkText");
        eventLinkText.innerHTML = "event link url";
        const eventLinkField = document.createElement("input");
        eventLinkField.setAttribute("id", "eventLinkField");
        eventLinkField.setAttribute('type', "text");

        addForm.appendChild(monthText);
        monthSelect.appendChild(monthJan);
        monthSelect.appendChild(monthFeb);
        monthSelect.appendChild(monthMar);
        monthSelect.appendChild(monthApr);
        monthSelect.appendChild(monthJun);
        monthSelect.appendChild(monthJul);
        monthSelect.appendChild(monthAug);
        monthSelect.appendChild(monthSep);
        monthSelect.appendChild(monthOct);
        monthSelect.appendChild(monthNov);
        monthSelect.appendChild(monthDec);
        addForm.appendChild(monthSelect);
        addForm.appendChild(dayText);
        addForm.appendChild(dayField);
        addForm.appendChild(yearText);
        addForm.appendChild(yearField);
        addForm.appendChild(eventTimeText);
        addForm.appendChild(eventTimeField);
        addForm.appendChild(eventImageText);
        addForm.appendChild(eventImageField);
        addForm.appendChild(eventNameText);
        addForm.appendChild(eventNameField);
        addForm.appendChild(eventLocationText);
        addForm.appendChild(eventLocationField);
        addForm.appendChild(eventLinkText);
        addForm.appendChild(eventLinkField);
    }
    else if(page == "photoGallery") {
        const photoUrlText = document.createElement('p');
        photoUrlText.setAttribute('id', "photoUrlText");
        photoUrlText.innerHTML = "photo url";
        const photoUrlField = document.createElement("input");
        photoUrlField.setAttribute('id', "photoUrlField");
        photoUrlField.setAttribute('type', "text");

        const photoTitleText = document.createElement('p');
        photoTitleText.setAttribute('id', "photoTitleText");
        photoTitleText.innerHTML = "photo title";
        const photoTitleField = document.createElement("input");
        photoTitleField.setAttribute('id', "photoTitleField");
        photoTitleField.setAttribute('type', "text");

        addForm.appendChild(photoUrlText);
        addForm.appendChild(photoUrlField);
        addForm.appendChild(photoTitleText);
        addForm.appendChild(photoTitleField);
    }
    else if(page == "musicAndVideos") {
        const videoPreviewUrlText = document.createElement('p');
        videoPreviewUrlText.setAttribute('id', "videoPreviewUrlText");
        videoPreviewUrlText.innerHTML = "video preview url";
        const videoPreviewUrlField = document.createElement("input");
        videoPreviewUrlField.setAttribute('id', "videoPreviewUrlField");
        videoPreviewUrlField.setAttribute('type', "text");
        
        const videoUrlText = document.createElement('p');
        videoUrlText.setAttribute('id', "videoUrlText");
        videoUrlText.innerHTML = "video url";
        const videoUrlField = document.createElement("input");
        videoUrlField.setAttribute('id', "videoUrlField");
        videoUrlField.setAttribute('type', "text");

        const videoTitleText = document.createElement('p');
        videoTitleText.setAttribute('id', "videoTitleText");
        videoTitleText.innerHTML = "video title";
        const videoTitleField = document.createElement("input");
        videoTitleField.setAttribute('id', "videoTitleField");
        videoTitleField.setAttribute('type', "text");

        addForm.appendChild(videoPreviewUrlText);
        addForm.appendChild(videoPreviewUrlField);
        addForm.appendChild(videoUrlText);
        addForm.appendChild(videoUrlField);
        addForm.appendChild(videoTitleText);
        addForm.appendChild(videoTitleField);
    }
    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirmButton");
    confirmButton.innerHTML = "add to database";
    addForm.appendChild(confirmButton);
    formContainer.appendChild(addForm);
}

function setFormContainerDelete(data) {
    console.log("does this ever run?");
    const deleteForm = document.createElement("form");
    deleteForm.setAttribute("id", "deleteForm");

    const serverUrlText = document.createElement('p');
    serverUrlText.setAttribute('id', "serverUrlText");
    serverUrlText.innerHTML = "server url";
    const serverUrlField = document.createElement("input");
    serverUrlField.setAttribute('id', "serverUrlField");
    serverUrlField.setAttribute('type', "text");
    
    const serverPasswordText = document.createElement('p');
    serverPasswordText.setAttribute('id', "serverUrlText");
    serverPasswordText.innerHTML = "server password";
    const serverPasswordField = document.createElement("input");
    serverPasswordField.setAttribute('id', "serverPasswordField");
    serverPasswordField.setAttribute('type', "password");

    deleteForm.appendChild(serverUrlText);
    deleteForm.appendChild(serverUrlField);
    deleteForm.appendChild(serverPasswordText);
    deleteForm.appendChild(serverPasswordField);

    if(page == "upcomingEvents") {
        const monthText = document.createElement('p');
        monthText.setAttribute('id', "monthText");
        monthText.innerHTML = "month";
        const monthSelect = document.createElement("select");
        monthSelect.setAttribute("id", "monthSelect");
        
        const monthJan = document.createElement('option');
        monthJan.setAttribute('id', "monthJan");
        monthJan.setAttribute("value", "Jan");
        monthJan.innerHTML = "Jan";

        const monthFeb = document.createElement('option');
        monthFeb.setAttribute('id', "monthFeb");
        monthFeb.setAttribute("value", "Feb");
        monthFeb.innerHTML = "Feb";

        const monthMar = document.createElement('option');
        monthMar.setAttribute('id', "monthMar");
        monthMar.setAttribute("value", "Mar");
        monthMar.innerHTML = "Mar";

        const monthApr = document.createElement('option');
        monthApr.setAttribute('id', "monthApr");
        monthApr.setAttribute("value", "Apr");
        monthApr.innerHTML = "Apr";

        const monthMay = document.createElement('option');
        monthMay.setAttribute('id', "monthMay");
        monthMay.setAttribute("value", "May");
        monthMay.innerHTML = "May";

        const monthJun = document.createElement('option');
        monthJun.setAttribute('id', "monthJun");
        monthJun.setAttribute("value", "Jun");
        monthJun.innerHTML = "Jun";

        const monthJul = document.createElement('option');
        monthJul.setAttribute('id', "monthJul");
        monthJul.setAttribute("value", "Jul");
        monthJul.innerHTML = "Jul";

        const monthAug = document.createElement('option');
        monthAug.setAttribute('id', "monthAug");
        monthAug.setAttribute("value", "Aug");
        monthAug.innerHTML = "Aug";

        const monthSep = document.createElement('option');
        monthSep.setAttribute('id', "monthSep");
        monthSep.setAttribute("value", "Sep");
        monthSep.innerHTML = "Sep";

        const monthOct = document.createElement('option');
        monthOct.setAttribute('id', "monthOct");
        monthOct.setAttribute("value", "Oct");
        monthOct.innerHTML = "Oct";

        const monthNov = document.createElement('option');
        monthNov.setAttribute('id', "monthNov");
        monthNov.setAttribute("value", "Nov");
        monthNov.innerHTML = "Nov";

        const monthDec = document.createElement('option');
        monthDec.setAttribute('id', "monthDec");
        monthDec.setAttribute("value", "Dec");
        monthDec.innerHTML = "Dec";

        const dayText = document.createElement('p');
        dayText.setAttribute('id', "dayText");
        dayText.innerHTML = "day";
        const dayField = document.createElement("input");
        dayField.setAttribute('id', "dayField");
        dayField.setAttribute('type', "text");

        const yearText = document.createElement('p');
        yearText.setAttribute('id', "yearText");
        yearText.innerHTML = "year";
        const yearField = document.createElement("input");
        yearField.setAttribute("id", "yearField");
        yearField.setAttribute('type', "text");

        const eventTimeText = document.createElement('p');
        eventTimeText.setAttribute('id', "eventTimeText");
        eventTimeText.innerHTML = "event time";
        const eventTimeField = document.createElement("input");
        eventTimeField.setAttribute("id", "eventTimeField");
        eventTimeField.setAttribute('type', "text");

        const eventImageText = document.createElement('p');
        eventImageText.setAttribute('id', "eventImageText");
        eventImageText.innerHTML = "event image url";
        const eventImageField = document.createElement("input");
        eventImageField.setAttribute("id", "eventImageField");
        eventImageField.setAttribute('type', "text");

        const eventNameText = document.createElement('p');
        eventNameText.setAttribute('id', "eventNameText");
        eventNameText.innerHTML = "event name";
        const eventNameField = document.createElement("input");
        eventNameField.setAttribute("id", "eventNameField");
        eventNameField.setAttribute('type', "text");

        const eventLocationText = document.createElement('p');
        eventLocationText.setAttribute('id', "eventLocationText");
        eventLocationText.innerHTML = "event location";
        const eventLocationField = document.createElement("input");
        eventLocationField.setAttribute("id", "eventLocationField");
        eventLocationField.setAttribute('type', "text");

        const eventLinkText = document.createElement('p');
        eventLinkText.setAttribute('id', "eventLinkText");
        eventLinkText.innerHTML = "event link url";
        const eventLinkField = document.createElement("input");
        eventLinkField.setAttribute("id", "eventLinkField");
        eventLinkField.setAttribute('type', "text");

        deleteForm.appendChild(monthText);
        monthSelect.appendChild(monthJan);
        monthSelect.appendChild(monthFeb);
        monthSelect.appendChild(monthMar);
        monthSelect.appendChild(monthApr);
        monthSelect.appendChild(monthJun);
        monthSelect.appendChild(monthJul);
        monthSelect.appendChild(monthAug);
        monthSelect.appendChild(monthSep);
        monthSelect.appendChild(monthOct);
        monthSelect.appendChild(monthNov);
        monthSelect.appendChild(monthDec);
        deleteForm.appendChild(monthSelect);
        deleteForm.appendChild(dayText);
        deleteForm.appendChild(dayField);
        deleteForm.appendChild(yearText);
        deleteForm.appendChild(yearField);
        deleteForm.appendChild(eventTimeText);
        deleteForm.appendChild(eventTimeField);
        deleteForm.appendChild(eventImageText);
        deleteForm.appendChild(eventImageField);
        deleteForm.appendChild(eventNameText);
        deleteForm.appendChild(eventNameField);
        deleteForm.appendChild(eventLocationText);
        deleteForm.appendChild(eventLocationField);
        deleteForm.appendChild(eventLinkText);
        deleteForm.appendChild(eventLinkField);

        let month = document.getElementById("monthSelect");
        month.value = data.month;
        let day = document.getElementById("dayField");
        day.value = data.day;
        let year = document.getElementById("yearField");
        year.value = data.year;
        let eventTime = document.getElementById("eventTimeField");
        eventTime.value = data.eventTime;
        let eventImage = document.getElementById("eventImageField");
        eventImage.value = data.eventImage;
        let eventName = document.getElementById("eventNameField");
        eventName.value = data.eventName;
        let eventLocation = document.getElementById("eventLocationField");
        eventLocation.value = data.eventLocation;
        let eventLink = document.getElementById("eventLinkField");
        eventLink.value = data.eventLink;
    }
    else if(page == "photoGallery") {
        const photoUrlText = document.createElement('p');
        photoUrlText.setAttribute('id', "photoUrlText");
        photoUrlText.innerHTML = "photo url";
        const photoUrlField = document.createElement("input");
        photoUrlField.setAttribute('id', "photoUrlField");
        photoUrlField.setAttribute('type', "text");

        const photoTitleText = document.createElement('p');
        photoTitleText.setAttribute('id', "photoTitleText");
        photoTitleText.innerHTML = "photo title";
        const photoTitleField = document.createElement("input");
        photoTitleField.setAttribute('id', "photoTitleField");
        photoTitleField.setAttribute('type', "text");

        deleteForm.appendChild(photoUrlText);
        deleteForm.appendChild(photoUrlField);
        deleteForm.appendChild(photoTitleText);
        deleteForm.appendChild(photoTitleField);

        let photoUrl = document.getElementById("photoUrlField");
        photoUrl.value = data.photoUrl;
        let photoTitle = document.getElementById("photoTitleField");
        photoTitle.value = data.photoTitle;
    }
    else if(page == "musicAndVideos") {
        const videoPreviewUrlText = document.createElement('p');
        videoPreviewUrlText.setAttribute('id', "videoPreviewUrlText");
        videoPreviewUrlText.innerHTML = "video preview url";
        const videoPreviewUrlField = document.createElement("input");
        videoPreviewUrlField.setAttribute('id', "videoPreviewUrlField");
        videoPreviewUrlField.setAttribute('type', "text");
        
        const videoUrlText = document.createElement('p');
        videoUrlText.setAttribute('id', "videoUrlText");
        videoUrlText.innerHTML = "video url";
        const videoUrlField = document.createElement("input");
        videoUrlField.setAttribute('id', "videoUrlField");
        videoUrlField.setAttribute('type', "text");

        const videoTitleText = document.createElement('p');
        videoTitleText.setAttribute('id', "videoTitleText");
        videoTitleText.innerHTML = "video title";
        const videoTitleField = document.createElement("input");
        videoTitleField.setAttribute('id', "videoTitleField");
        videoTitleField.setAttribute('type', "text");

        deleteForm.appendChild(videoPreviewUrlText);
        deleteForm.appendChild(videoPreviewUrlField);
        deleteForm.appendChild(videoUrlText);
        deleteForm.appendChild(videoUrlField);
        deleteForm.appendChild(videoTitleText);
        deleteForm.appendChild(videoTitleField);

        let videoPreviewUrl = document.getElementById("videoP{reviewUrlField");
        videoPreviewUrl.value = data.videoPreviewUrl;
        let videoUrl = document.getElementById("videoUrlField");
        videoUrl.value = data.videoUrl;
        let videoTitle = document.getElementById("videoTitleField");
        videoTitle.value = data.videoTitle;
    }
    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirmButton");
    confirmButton.innerHTML = "edit to database";
    deleteForm.appendChild(confirmButton);
    formContainer.appendChild(deleteForm);
    index = data.index;
    confirmButtonHandle = document.getElementById("confirmButton");
    confirmButtonHandle.addEventListener("click", confirmButtonDelete);
}

function setFormContainerGetRequest() {
    const getRequestForm = document.createElement("form");
    getRequestForm.setAttribute("id", "getRequestForm");

    const serverUrlText = document.createElement('p');
    serverUrlText.setAttribute('id', "serverUrlText");
    serverUrlText.innerHTML = "server url";
    const serverUrlField = document.createElement("input");
    serverUrlField.setAttribute('id', "serverUrlField");
    serverUrlField.setAttribute('type', "text");
    
    const serverPasswordText = document.createElement('p');
    serverPasswordText.setAttribute('id', "serverUrlText");
    serverPasswordText.innerHTML = "server password";
    const serverPasswordField = document.createElement("input");
    serverPasswordField.setAttribute('id', "serverPasswordField");
    serverPasswordField.setAttribute('type', "password");

    const getRequestIndexTitle = document.createElement('p');
    getRequestIndexTitle.setAttribute('id', "getRequestIndexTitle");
    getRequestIndexTitle.innerHTML = "index of element";
    const getRequestIndex = document.createElement('input');
    getRequestIndex.setAttribute('id', "getRequestIndex");
    getRequestIndex.setAttribute('type', "text");

    getRequestForm.appendChild(serverUrlText);
    getRequestForm.appendChild(serverUrlField);
    getRequestForm.appendChild(serverPasswordText);
    getRequestForm.appendChild(serverPasswordField);
    getRequestForm.appendChild(getRequestIndexTitle);
    getRequestForm.appendChild(getRequestIndex);

    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirmButton");
    confirmButton.innerHTML = "get from database";
    getRequestForm.appendChild(confirmButton);
    formContainer.appendChild(getRequestForm);
}

function setFormContainerEdit(data) {
    const editForm = document.createElement("form");
    editForm.setAttribute("id", "editForm");

    const serverUrlText = document.createElement('p');
    serverUrlText.setAttribute('id', "serverUrlText");
    serverUrlText.innerHTML = "server url";
    const serverUrlField = document.createElement("input");
    serverUrlField.setAttribute('id', "serverUrlField");
    serverUrlField.setAttribute('type', "text");
    
    const serverPasswordText = document.createElement('p');
    serverPasswordText.setAttribute('id', "serverUrlText");
    serverPasswordText.innerHTML = "server password";
    const serverPasswordField = document.createElement("input");
    serverPasswordField.setAttribute('id', "serverPasswordField");
    serverPasswordField.setAttribute('type', "password");

    editForm.appendChild(serverUrlText);
    editForm.appendChild(serverUrlField);
    editForm.appendChild(serverPasswordText);
    editForm.appendChild(serverPasswordField);

    if(page == "upcomingEvents") {
        const monthText = document.createElement('p');
        monthText.setAttribute('id', "monthText");
        monthText.innerHTML = "month";
        const monthSelect = document.createElement("select");
        monthSelect.setAttribute("id", "monthSelect");
        
        const monthJan = document.createElement('option');
        monthJan.setAttribute('id', "monthJan");
        monthJan.setAttribute("value", "Jan");
        monthJan.innerHTML = "Jan";

        const monthFeb = document.createElement('option');
        monthFeb.setAttribute('id', "monthFeb");
        monthFeb.setAttribute("value", "Feb");
        monthFeb.innerHTML = "Feb";

        const monthMar = document.createElement('option');
        monthMar.setAttribute('id', "monthMar");
        monthMar.setAttribute("value", "Mar");
        monthMar.innerHTML = "Mar";

        const monthApr = document.createElement('option');
        monthApr.setAttribute('id', "monthApr");
        monthApr.setAttribute("value", "Apr");
        monthApr.innerHTML = "Apr";

        const monthMay = document.createElement('option');
        monthMay.setAttribute('id', "monthMay");
        monthMay.setAttribute("value", "May");
        monthMay.innerHTML = "May";

        const monthJun = document.createElement('option');
        monthJun.setAttribute('id', "monthJun");
        monthJun.setAttribute("value", "Jun");
        monthJun.innerHTML = "Jun";

        const monthJul = document.createElement('option');
        monthJul.setAttribute('id', "monthJul");
        monthJul.setAttribute("value", "Jul");
        monthJul.innerHTML = "Jul";

        const monthAug = document.createElement('option');
        monthAug.setAttribute('id', "monthAug");
        monthAug.setAttribute("value", "Aug");
        monthAug.innerHTML = "Aug";

        const monthSep = document.createElement('option');
        monthSep.setAttribute('id', "monthSep");
        monthSep.setAttribute("value", "Sep");
        monthSep.innerHTML = "Sep";

        const monthOct = document.createElement('option');
        monthOct.setAttribute('id', "monthOct");
        monthOct.setAttribute("value", "Oct");
        monthOct.innerHTML = "Oct";

        const monthNov = document.createElement('option');
        monthNov.setAttribute('id', "monthNov");
        monthNov.setAttribute("value", "Nov");
        monthNov.innerHTML = "Nov";

        const monthDec = document.createElement('option');
        monthDec.setAttribute('id', "monthDec");
        monthDec.setAttribute("value", "Dec");
        monthDec.innerHTML = "Dec";

        const dayText = document.createElement('p');
        dayText.setAttribute('id', "dayText");
        dayText.innerHTML = "day";
        const dayField = document.createElement("input");
        dayField.setAttribute('id', "dayField");
        dayField.setAttribute('type', "text");

        const yearText = document.createElement('p');
        yearText.setAttribute('id', "yearText");
        yearText.innerHTML = "year";
        const yearField = document.createElement("input");
        yearField.setAttribute("id", "yearField");
        yearField.setAttribute('type', "text");

        const eventTimeText = document.createElement('p');
        eventTimeText.setAttribute('id', "eventTimeText");
        eventTimeText.innerHTML = "event time";
        const eventTimeField = document.createElement("input");
        eventTimesField.setAttribute("id", "eventTimeField");
        eventTimeField.setAttribute('type', "text");

        const eventImageText = document.createElement('p');
        eventImageText.setAttribute('id', "eventImageText");
        eventImageText.innerHTML = "event image url";
        const eventImageField = document.createElement("input");
        eventImageField.setAttribute("id", "eventImageField");
        eventImageField.setAttribute('type', "text");

        const eventNameText = document.createElement('p');
        eventNameText.setAttribute('id', "eventNameText");
        eventNameText.innerHTML = "event name";
        const eventNameField = document.createElement("input");
        eventNameField.setAttribute("id", "eventNameField");
        eventNameField.setAttribute('type', "text");

        const eventLocationText = document.createElement('p');
        eventLocationText.setAttribute('id', "eventLocationText");
        eventLocationText.innerHTML = "event location";
        const eventLocationField = document.createElement("input");
        eventLocationField.setAttribute("id", "eventLocationField");
        eventLocationField.setAttribute('type', "text");

        const eventLinkText = document.createElement('p');
        eventLinkText.setAttribute('id', "eventLinkText");
        eventLinkText.innerHTML = "event link url";
        const eventLinkField = document.createElement("input");
        eventLinkField.setAttribute("id", "eventLinkField");
        eventLinkField.setAttribute('type', "text");

        editForm.appendChild(monthText);
        monthSelect.appendChild(monthJan);
        monthSelect.appendChild(monthFeb);
        monthSelect.appendChild(monthMar);
        monthSelect.appendChild(monthApr);
        monthSelect.appendChild(monthJun);
        monthSelect.appendChild(monthJul);
        monthSelect.appendChild(monthAug);
        monthSelect.appendChild(monthSep);
        monthSelect.appendChild(monthOct);
        monthSelect.appendChild(monthNov);
        monthSelect.appendChild(monthDec);
        editForm.appendChild(monthSelect);
        editForm.appendChild(dayText);
        editForm.appendChild(dayField);
        editForm.appendChild(yearText);
        editForm.appendChild(yearField);
        editForm.appendChild(eventTimeText);
        editForm.appendChild(eventTimeField);
        editForm.appendChild(eventImageText);
        editForm.appendChild(eventImageField);
        editForm.appendChild(eventNameText);
        editForm.appendChild(eventNameField);
        editForm.appendChild(eventLocationText);
        editForm.appendChild(eventLocationField);
        editForm.appendChild(eventLinkText);
        editForm.appendChild(eventLinkField);

        let month = document.getElementById("monthSelect");
        month.value = data.month;
        let day = document.getElementById("dayField");
        day.value = data.day;
        let year = document.getElementById("yearField");
        year.value = data.year;
        let eventTime = document.getElementById("eventTimeField");
        eventTime.value = data.eventTime;
        let eventImage = document.getElementById("eventImageField");
        eventImage.value = data.eventImage;
        let eventName = document.getElementById("eventNameField");
        eventName.value = data.eventName;
        let eventLocation = document.getElementById("eventLocationField");
        eventLocation.value = data.eventLocation;
        let eventLink = document.getElementById("eventLinkField");
        eventLink.value = data.eventLink;
    }
    else if(page == "photoGallery") {
        const photoUrlText = document.createElement('p');
        photoUrlText.setAttribute('id', "photoUrlText");
        photoUrlText.innerHTML = "photo url";
        const photoUrlField = document.createElement("input");
        photoUrlField.setAttribute('id', "photoUrlField");
        photoUrlField.setAttribute('type', "text");

        const photoTitleText = document.createElement('p');
        photoTitleText.setAttribute('id', "photoTitleText");
        photoTitleText.innerHTML = "photo title";
        const photoTitleField = document.createElement("input");
        photoTitleField.setAttribute('id', "photoTitleField");
        photoTitleField.setAttribute('type', "text");

        editForm.appendChild(photoUrlText);
        editForm.appendChild(photoUrlField);
        editForm.appendChild(photoTitleText);
        editForm.appendChild(photoTitleField);

        let photoUrl = document.getElementById("photoUrlField");
        photoUrl.value = data.photoUrl;
        let photoTitle = document.getElementById("photoTitleField");
        photoTitle.value = data.photoTitle;
    }
    else if(page == "musicAndVideos") {
        const videoPreviewUrlText = document.createElement('p');
        videoPreviewUrlText.setAttribute('id', "videoPreviewUrlText");
        videoPreviewUrlText.innerHTML = "video preview url";
        const videoPreviewUrlField = document.createElement("input");
        videoPreviewUrlField.setAttribute('id', "videoPreviewUrlField");
        videoPreviewUrlField.setAttribute('type', "text");
        
        const videoUrlText = document.createElement('p');
        videoUrlText.setAttribute('id', "videoUrlText");
        videoUrlText.innerHTML = "video url";
        const videoUrlField = document.createElement("input");
        videoUrlField.setAttribute('id', "videoUrlField");
        videoUrlField.setAttribute('type', "text");

        const videoTitleText = document.createElement('p');
        videoTitleText.setAttribute('id', "videoTitleText");
        videoTitleText.innerHTML = "video title";
        const videoTitleField = document.createElement("input");
        videoTitleField.setAttribute('id', "videoTitleField");
        videoTitleField.setAttribute('type', "text");

        editForm.appendChild(videoPreviewUrlText);
        editForm.appendChild(videoPreviewUrlField);
        editForm.appendChild(videoUrlText);
        editForm.appendChild(videoUrlField);
        editForm.appendChild(photoTitleText);
        editForm.appendChild(photoTitleField);

        let videoPreviewUrl = document.getElementById("videoP{reviewUrlField");
        videoPreviewUrl.value = data.videoPreviewUrl;
        let videoUrl = document.getElementById("videoUrlField");
        videoUrl.value = data.videoUrl;
        let videoTitle = document.getElementById("videoTitleField");
        videoTitle.value = data.videoTitle;
    }
    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("id", "confirmButton");
    confirmButton.innerHTML = "edit to database";
    editForm.appendChild(confirmButton);
    formContainer.appendChild(editForm);
    index = data.index;
    confirmButtonHandle = document.getElementById("confirmButton");
    confirmButtonHandle.addEventListener("click", confirmButtonEdit);
}

function setFormContainer(setPage, setAction) {
    page = setPage;
    action = setAction;
    if(action == "add") {
        setFormContainerAdd();
        setConfirmButtonEventAdd();
    }
    else if(action == "edit") {
        setFormContainerGetRequest();
        setConfirmButtonEventGetRequest();
    }
    else if(action == "delete") {
        setFormContainerGetRequest();
        setConfirmButtonEventGetRequest();
    }
}

function formSubmitUpcomingEventsAdd() {
    setFormContainer("upcomingEvents", "add");
}

function formSubmitUpcomingEventsEdit() {
    setFormContainer("upcomingEvents", "edit");
}

function formSubmitUpcomingEventsDelete() {
    setFormContainer("upcomingEvents", "delete");
}

function formSubmitPhotoGalleryAdd() {
    setFormContainer("photoGallery", "add");
}

function formSubmitPhotoGalleryEdit() {
    setFormContainer("photoGallery", "edit");
}

function formSubmitPhotoGalleryDelete() {
    setFormContainer("photoGallery", "delete");
}

function formSubmitMusicAndVideosAdd() {
    setFormContainer("musicAndVideos", "add");
}

function formSubmitMusicAndVideosEdit() {
    setFormContainer("musicAndVideos", "edit");
}

function formSubmitMusicAndVideosDelete() {
    setFormContainer("musicAndVideos", "delete");
}

var formContainer = document.getElementById("formContainer");

var selectPageUpcomingEventsAdd = document.getElementById("selectPageUpcomingEventsAdd");
var selectPageUpcomingEventsEdit = document.getElementById("selectPageUpcomingEventsEdit");
var selectPageUpcomingEventsDelete = document.getElementById("selectPageUpcomingEventsDelete");
var selectPagePhotoGalleryAdd = document.getElementById("selectPagePhotoGalleryAdd");
var selectPagePhotoGalleryEdit = document.getElementById("selectPagePhotoGalleryEdit");
var selectPagePhotoGalleryDelete = document.getElementById("selectPagePhotoGalleryDelete");
var selectPageMusicAndVideosAdd = document.getElementById("selectPageMusicAndVideosAdd");
var selectPageMusicAndVideosEdit = document.getElementById("selectPageMusicAndVideosEdit");
var selectPageMusicAndVideosDelete = document.getElementById("selectPageMusicAndVideosDelete");

selectPageUpcomingEventsAdd.addEventListener("click", formSubmitUpcomingEventsAdd);
selectPageUpcomingEventsEdit.addEventListener("click", formSubmitUpcomingEventsEdit);
selectPageUpcomingEventsDelete.addEventListener("click", formSubmitUpcomingEventsDelete);
selectPagePhotoGalleryAdd.addEventListener("click", formSubmitPhotoGalleryAdd);
selectPagePhotoGalleryEdit.addEventListener("click", formSubmitPhotoGalleryEdit);
selectPagePhotoGalleryDelete.addEventListener("click", formSubmitPhotoGalleryDelete);
selectPageMusicAndVideosAdd.addEventListener("click", formSubmitMusicAndVideosAdd);
selectPageMusicAndVideosEdit.addEventListener("click", formSubmitMusicAndVideosEdit);
selectPageMusicAndVideosDelete.addEventListener("click", formSubmitMusicAndVideosDelete);