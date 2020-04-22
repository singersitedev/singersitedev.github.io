var state = {
    page: "select",
    action: "null",
    index: "null", //for edit and delete requests
    isStageTwo: false, //edit and delete have two stages, get and performing action
    processAction: false //set to true if an action is meant to be processed next, 
                        //false if a page is going to be being selected next
};

var innerFormContainerHandle = document.getElementById("innerFormContainer");
var confirmButtonHandle = document.getElementById("confirmButton");

//set these to null on successful state change, and reset after
var selectUpcomingEventsAddButtonHandle = document.getElementById("selectUpcomingEventsAdd");
var selectUpcomingEventsEditButtonHandle = document.getElementById("selectUpcomingEventsEdit");
var selectUpcomingEventsDeleteButtonHandle = document.getElementById("selectUpcomingEventsDelete");
var selectPhotoGalleryAddButtonHandle = document.getElementById("selectPhotoGalleryAdd");
var selectPhotoGalleryEditButtonHandle = document.getElementById("selectPhotoGalleryEdit");
var selectPhotoGalleryDeleteButtonHandle = document.getElementById("selectPhotoGalleryDelete");
var selectMusicAndVideosAddButtonHandle = document.getElementById("selectMusicAndVideosAdd");
var selectMusicAndVideosEditButtonHandle = document.getElementById("selectMusicAndVideosEdit");
var selectMusicAndVideosDeleteButtonHandle = document.getElementById("selectMusicAndVideosDelete");

function resetUI() {
    while(innerFormContainerHandle.hasChildNodes()) {
        innerFormContainerHandle.removeChild(innerFormContainerHandle.firstChild);
    }
    let instructionHandle = document.createElement('p');
    instructionHandle.setAttribute('id', "instruction");
    instructionHandle.innerHTML = "select page: ";
    let displayStateHandle = document.createElement("p");
    displayStateHandle.setAttribute('id', "displayState");
    displayStateHandle.innerHTML = "selected state: page: " + state.page + " action: " + state.action;
    let selectUpcomingEventsAddHandle = document.createElement("button");
    selectUpcomingEventsAddHandle.setAttribute('id', "selectUpcomingEventsAdd");
    selectUpcomingEventsAddHandle.innerHTML = "upcoming events add";
    let selectUpcomingEventsEditHandle = document.createElement("button");
    selectUpcomingEventsEditHandle.setAttribute('id', "selectUpcomingEventsEdit");
    selectUpcomingEventsEditHandle.innerHTML = "upcoming events edit";
    let selectUpcomingEventsDeleteHandle = document.createElement("button");
    selectUpcomingEventsDeleteHandle.setAttribute('id', "selectUpcomingEventsDelete");
    selectUpcomingEventsDeleteHandle.innerHTML = "upcoming events delete";
    let selectPhotoGalleryAddHandle = document.createElement("button");
    selectPhotoGalleryAddHandle.setAttribute('id', "selectPhotoGalleryAdd");
    selectPhotoGalleryAddHandle.innerHTML = "photo gallery add";
    let selectPhotoGalleryEditHandle = document.createElement("button");
    selectPhotoGalleryEditHandle.setAttribute('id', "selectPhotoGalleryEdit");
    selectPhotoGalleryEditHandle.innerHTML = "photo gallery edit";
    let selectPhotoGalleryDeleteHandle = document.createElement("button");
    selectPhotoGalleryDeleteHandle.setAttribute('id', "selectPhotoGalleryDelete");
    selectPhotoGalleryDeleteHandle.innerHTML = "photo gallery delete";
    let selectMusicAndVideosAddHandle = document.createElement("button");
    selectMusicAndVideosAddHandle.setAttribute('id', "selectMusicAndVideosAdd");
    selectMusicAndVideosAddHandle.innerHTML = "music and videos add";
    let selectMusicAndVideosEditHandle = document.createElement("button");
    selectMusicAndVideosEditHandle.setAttribute('id', "selectMusicAndVideosEdit");
    selectMusicAndVideosEditHandle.innerHTML = "music and videos edit";
    let selectMusicAndVideosDeleteHandle = document.createElement("button");
    selectMusicAndVideosDeleteHandle.setAttribute('id', "selectMusicAndVideosDelete");
    selectMusicAndVideosDeleteHandle.innerHTML = "music and videos delete";

    innerFormContainerHandle.appendChild(instructionHandle);
    innerFormContainerHandle.appendChild(displayStateHandle);
    innerFormContainerHandle.appendChild(selectUpcomingEventsAddHandle);
    innerFormContainerHandle.appendChild(selectUpcomingEventsEditHandle);
    innerFormContainerHandle.appendChild(selectUpcomingEventsDeleteHandle);
    innerFormContainerHandle.appendChild(selectPhotoGalleryAddHandle);
    innerFormContainerHandle.appendChild(selectPhotoGalleryEditHandle);
    innerFormContainerHandle.appendChild(selectPhotoGalleryDeleteHandle);
    innerFormContainerHandle.appendChild(selectMusicAndVideosAddHandle);
    innerFormContainerHandle.appendChild(selectMusicAndVideosEditHandle);
    innerFormContainerHandle.appendChild(selectMusicAndVideosDeleteHandle);

    selectUpcomingEventsAddButtonHandle = document.getElementById("selectUpcomingEventsAdd");
    selectUpcomingEventsEditButtonHandle = document.getElementById("selectUpcomingEventsEdit");
    selectUpcomingEventsDeleteButtonHandle = document.getElementById("selectUpcomingEventsDelete");
    selectPhotoGalleryAddButtonHandle = document.getElementById("selectPhotoGalleryAdd");
    selectPhotoGalleryEditButtonHandle = document.getElementById("selectPhotoGalleryEdit");
    selectPhotoGalleryDeleteButtonHandle = document.getElementById("selectPhotoGalleryDelete");
    selectMusicAndVideosAddButtonHandle = document.getElementById("selectMusicAndVideosAdd");
    selectMusicAndVideosEditButtonHandle = document.getElementById("selectMusicAndVideosEdit");
    selectMusicAndVideosDeleteButtonHandle = document.getElementById("selectMusicAndVideosDelete");
    selectUpcomingEventsAddButtonHandle.addEventListener("click", selectUpcomingEventsAdd);
    selectUpcomingEventsEditButtonHandle.addEventListener("click", selectUpcomingEventsEdit);
    selectUpcomingEventsDeleteButtonHandle.addEventListener("click", selectUpcomingEventsDelete);
    selectPhotoGalleryAddButtonHandle.addEventListener("click", selectPhotoGalleryAdd);
    selectPhotoGalleryEditButtonHandle.addEventListener("click", selectPhotoGalleryEdit);
    selectPhotoGalleryDeleteButtonHandle.addEventListener("click", selectPhotoGalleryDelete);
    selectMusicAndVideosAddButtonHandle.addEventListener("click", selectMusicAndVideosAdd);
    selectMusicAndVideosEditButtonHandle.addEventListener("click", selectMusicAndVideosEdit);
    selectMusicAndVideosDeleteButtonHandle.addEventListener("click", selectMusicAndVideosDelete);

    state = {
        page: "select",
        action: "null",
        index: "null",
        isStageTwo: false,
        processAction: false
    };
}

function setRequestBoilerplate() { //also removes previous innerFormContainer elements
    if(!state.isStageTwo) {
        selectUpcomingEventsAddButtonHandle = null;
        selectUpcomingEventsEditButtonHandle = null;
        selectUpcomingEventsDeleteButtonHandle = null;
        selectPhotoGalleryAddButtonHandle = null;
        selectPhotoGalleryEditButtonHandle = null;
        selectPhotoGalleryDeleteButtonHandle = null;
        selectMusicAndVideosAddButtonHandle = null;
        selectMusicAndVideosEditButtonHandle = null;
        selectMusicAndVideosDeleteButtonHandle = null;
    }
    while(innerFormContainerHandle.hasChildNodes()) {
        innerFormContainerHandle.removeChild(innerFormContainerHandle.firstChild);
    }
    let serverUrlText = document.createElement('p');
    serverUrlText.setAttribute('id', "serverUrlText");
    serverUrlText.innerHTML = "server url";
    let serverUrlField = document.createElement("input");
    serverUrlField.setAttribute('id', "serverUrlField");
    serverUrlField.setAttribute('type', "text");
    
    let serverPasswordText = document.createElement('p');
    serverPasswordText.setAttribute('id', "serverUrlText");
    serverPasswordText.innerHTML = "server password";
    let serverPasswordField = document.createElement("input");
    serverPasswordField.setAttribute('id', "serverPasswordField");
    serverPasswordField.setAttribute('type', "password");

    innerFormContainerHandle.appendChild(serverUrlText);
    innerFormContainerHandle.appendChild(serverUrlField);
    innerFormContainerHandle.appendChild(serverPasswordText);
    innerFormContainerHandle.appendChild(serverPasswordField);

    state.processAction = true;
}

function setUpcomingEventsForm(serverData) {
    setRequestBoilerplate();
    let monthText = document.createElement('p');
    monthText.setAttribute('id', "monthText");
    monthText.innerHTML = "month";
    let monthSelect = document.createElement("select");
    monthSelect.setAttribute("id", "monthSelect");
    
    let monthJan = document.createElement('option');
    monthJan.setAttribute('id', "monthJan");
    monthJan.setAttribute("value", "Jan");
    monthJan.innerHTML = "Jan";

    let monthFeb = document.createElement('option');
    monthFeb.setAttribute('id', "monthFeb");
    monthFeb.setAttribute("value", "Feb");
    monthFeb.innerHTML = "Feb";

    let monthMar = document.createElement('option');
    monthMar.setAttribute('id', "monthMar");
    monthMar.setAttribute("value", "Mar");
    monthMar.innerHTML = "Mar";

    let monthApr = document.createElement('option');
    monthApr.setAttribute('id', "monthApr");
    monthApr.setAttribute("value", "Apr");
    monthApr.innerHTML = "Apr";

    let monthMay = document.createElement('option');
    monthMay.setAttribute('id', "monthMay");
    monthMay.setAttribute("value", "May");
    monthMay.innerHTML = "May";

    let monthJun = document.createElement('option');
    monthJun.setAttribute('id', "monthJun");
    monthJun.setAttribute("value", "Jun");
    monthJun.innerHTML = "Jun";

    let monthJul = document.createElement('option');
    monthJul.setAttribute('id', "monthJul");
    monthJul.setAttribute("value", "Jul");
    monthJul.innerHTML = "Jul";

    let monthAug = document.createElement('option');
    monthAug.setAttribute('id', "monthAug");
    monthAug.setAttribute("value", "Aug");
    monthAug.innerHTML = "Aug";

    let monthSep = document.createElement('option');
    monthSep.setAttribute('id', "monthSep");
    monthSep.setAttribute("value", "Sep");
    monthSep.innerHTML = "Sep";

    let monthOct = document.createElement('option');
    monthOct.setAttribute('id', "monthOct");
    monthOct.setAttribute("value", "Oct");
    monthOct.innerHTML = "Oct";

    let monthNov = document.createElement('option');
    monthNov.setAttribute('id', "monthNov");
    monthNov.setAttribute("value", "Nov");
    monthNov.innerHTML = "Nov";

    let monthDec = document.createElement('option');
    monthDec.setAttribute('id', "monthDec");
    monthDec.setAttribute("value", "Dec");
    monthDec.innerHTML = "Dec";

    let dayText = document.createElement('p');
    dayText.setAttribute('id', "dayText");
    dayText.innerHTML = "day";
    let dayField = document.createElement("input");
    dayField.setAttribute('id', "dayField");
    dayField.setAttribute('type', "text");

    let yearText = document.createElement('p');
    yearText.setAttribute('id', "yearText");
    yearText.innerHTML = "year";
    let yearField = document.createElement("input");
    yearField.setAttribute("id", "yearField");
    yearField.setAttribute('type', "text");

    let eventTimeText = document.createElement('p');
    eventTimeText.setAttribute('id', "eventTimeText");
    eventTimeText.innerHTML = "event time";
    let eventTimeField = document.createElement("input");
    eventTimeField.setAttribute("id", "eventTimeField");
    eventTimeField.setAttribute('type', "text");

    let eventImageText = document.createElement('p');
    eventImageText.setAttribute('id', "eventImageText");
    eventImageText.innerHTML = "event image url";
    let eventImageField = document.createElement("input");
    eventImageField.setAttribute("id", "eventImageField");
    eventImageField.setAttribute('type', "text");

    let eventNameText = document.createElement('p');
    eventNameText.setAttribute('id', "eventNameText");
    eventNameText.innerHTML = "event name";
    let eventNameField = document.createElement("input");
    eventNameField.setAttribute("id", "eventNameField");
    eventNameField.setAttribute('type', "text");

    let eventLocationText = document.createElement('p');
    eventLocationText.setAttribute('id', "eventLocationText");
    eventLocationText.innerHTML = "event location";
    let eventLocationField = document.createElement("input");
    eventLocationField.setAttribute("id", "eventLocationField");
    eventLocationField.setAttribute('type', "text");

    let eventLinkText = document.createElement('p');
    eventLinkText.setAttribute('id', "eventLinkText");
    eventLinkText.innerHTML = "event link url";
    let eventLinkField = document.createElement("input");
    eventLinkField.setAttribute("id", "eventLinkField");
    eventLinkField.setAttribute('type', "text");

    innerFormContainerHandle.appendChild(monthText);
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
    innerFormContainerHandle.appendChild(monthSelect);
    innerFormContainerHandle.appendChild(dayText);
    innerFormContainerHandle.appendChild(dayField);
    innerFormContainerHandle.appendChild(yearText);
    innerFormContainerHandle.appendChild(yearField);
    innerFormContainerHandle.appendChild(eventTimeText);
    innerFormContainerHandle.appendChild(eventTimeField);
    innerFormContainerHandle.appendChild(eventImageText);
    innerFormContainerHandle.appendChild(eventImageField);
    innerFormContainerHandle.appendChild(eventNameText);
    innerFormContainerHandle.appendChild(eventNameField);
    innerFormContainerHandle.appendChild(eventLocationText);
    innerFormContainerHandle.appendChild(eventLocationField);
    innerFormContainerHandle.appendChild(eventLinkText);
    innerFormContainerHandle.appendChild(eventLinkField);

    if(serverData != "null") {
        let month = document.getElementById("monthSelect");
        month.value = serverData.month;
        let day = document.getElementById("dayField");
        day.value = serverData.day;
        let year = document.getElementById("yearField");
        year.value = serverData.year;
        let eventTime = document.getElementById("eventTimeField");
        eventTime.value = serverData.eventTime;
        let eventImage = document.getElementById("eventImageField");
        eventImage.value = serverData.eventImage;
        let eventName = document.getElementById("eventNameField");
        eventName.value = serverData.eventName;
        let eventLocation = document.getElementById("eventLocationField");
        eventLocation.value = serverData.eventLocation;
        let eventLink = document.getElementById("eventLinkField");
        eventLink.value = serverData.eventLink;
    }
}

function setPhotoGalleryForm(serverData) {
    setRequestBoilerplate();
    let photoUrlText = document.createElement('p');
    photoUrlText.setAttribute('id', "photoUrlText");
    photoUrlText.innerHTML = "photo url";
    let photoUrlField = document.createElement("input");
    photoUrlField.setAttribute('id', "photoUrlField");
    photoUrlField.setAttribute('type', "text");

    let photoTitleText = document.createElement('p');
    photoTitleText.setAttribute('id', "photoTitleText");
    photoTitleText.innerHTML = "photo title";
    let photoTitleField = document.createElement("input");
    photoTitleField.setAttribute('id', "photoTitleField");
    photoTitleField.setAttribute('type', "text");

    innerFormContainerHandle.appendChild(photoUrlText);
    innerFormContainerHandle.appendChild(photoUrlField);
    innerFormContainerHandle.appendChild(photoTitleText);
    innerFormContainerHandle.appendChild(photoTitleField);

    if(serverData != "null") {
        let photoUrl = document.getElementById("photoUrlField");
        photoUrl.value = serverData.photoUrl;
        let photoTitle = document.getElementById("photoTitleField");
        photoTitle.value = serverData.photoTitle;
    }
}

function setMusicAndVideosForm(serverData) {
    setRequestBoilerplate();
    let videoPreviewUrlText = document.createElement('p');
    videoPreviewUrlText.setAttribute('id', "videoPreviewUrlText");
    videoPreviewUrlText.innerHTML = "video preview url";
    let videoPreviewUrlField = document.createElement("input");
    videoPreviewUrlField.setAttribute('id', "videoPreviewUrlField");
    videoPreviewUrlField.setAttribute('type', "text");
    
    let videoUrlText = document.createElement('p');
    videoUrlText.setAttribute('id', "videoUrlText");
    videoUrlText.innerHTML = "video url";
    let videoUrlField = document.createElement("input");
    videoUrlField.setAttribute('id', "videoUrlField");
    videoUrlField.setAttribute('type', "text");

    let videoTitleText = document.createElement('p');
    videoTitleText.setAttribute('id', "videoTitleText");
    videoTitleText.innerHTML = "video title";
    let videoTitleField = document.createElement("input");
    videoTitleField.setAttribute('id', "videoTitleField");
    videoTitleField.setAttribute('type', "text");

    innerFormContainerHandle.appendChild(videoPreviewUrlText);
    innerFormContainerHandle.appendChild(videoPreviewUrlField);
    innerFormContainerHandle.appendChild(videoUrlText);
    innerFormContainerHandle.appendChild(videoUrlField);
    innerFormContainerHandle.appendChild(videoTitleText);
    innerFormContainerHandle.appendChild(videoTitleField);

    if(serverData != "null") {
        let videoPreviewUrl = document.getElementById("videoP{reviewUrlField");
        videoPreviewUrl.value = serverData.videoPreviewUrl;
        let videoUrl = document.getElementById("videoUrlField");
        videoUrl.value = serverData.videoUrl;
        let videoTitle = document.getElementById("videoTitleField");
        videoTitle.value = serverData.videoTitle;
    }
}

function setGetRequestForm() {
    setRequestBoilerplate();
    let getRequestIndexTitle = document.createElement('p');
    getRequestIndexTitle.setAttribute('id', "getRequestIndexTitle");
    getRequestIndexTitle.innerHTML = "index of element";
    let getRequestIndex = document.createElement('input');
    getRequestIndex.setAttribute('id', "getRequestIndex");
    getRequestIndex.setAttribute('type', "text");

    innerFormContainerHandle.appendChild(getRequestIndexTitle);
    innerFormContainerHandle.appendChild(getRequestIndex);
}

function processGetRequest() {
    let clientData = {
        password: document.getElementById("serverPasswordField").value,
        action: 'getRequest',
        page: state.page,
        index: document.getElementById('getRequestIndex').value
    };
    state.index = clientData.index;
    console.log(clientData);
    window.confirm("sometext");
    window.confirm(clientData);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({clientData})
    }).then(response => response.json())
        .then(serverData => {
            if(state.page == "upcomingEvents")
                setUpcomingEventsForm(serverData);
            else if(state.page == "photoGallery")
                setPhotoGalleryForm(serverData);
            else if(state.page == "musicAndVideos")
                setMusicAndVideosForm(serverData);
            state.isStageTwo = true;
        });
}

function processPostAddRequest() {
    let clientData = null;
    if(state.page == "upcomingEvents") {
        clientData = {
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
    else if(state.page == "photoGallery") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'add',
            page: 'photoGallery',
            photoUrl: document.getElementById("photoUrlField").value,
            photoTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(state.page == "musicAndVideos") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'add',
            page: 'musicAndVideos',
            videoPreviewUrl: document.getElementById("vieoPreviewUrlField").value,
            videoUrl: document.getElementById("videoUrlField").value,
            videoTitle: document.getElementById("videoTitleField").value
        };
    }
    //TEST CODE
    console.log(clientData);
    window.confirm(clientData);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({clientData})
    }).then(response => response.json())
        .then(serverData => {
            console.log("post: ");
            console.log(serverData);
            window.confirm(serverData);
            resetUI();
        });
}

function processPostEditRequest() {
    let clientData = null;
    if(state.page == "upcomingEvents") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'edit',
            page: 'upcomingEvents',
            index: state.index,
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
    else if(state.page == "photoGallery") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'edit',
            page: 'photoGallery',
            photoUrl: document.getElementById("photoUrlField").value,
            photoTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(state.page == "musicAndVideos") {
        clientData = {
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
        body: JSON.stringify({clientData})
    }).then(response => response.json())
        .then(serverData => {
            console.log("post: ");
            console.log(serverData);
            resetUI();
        });
}

function processPostDeleteRequest() {
    let clientData = null;
    if(state.page == "upcomingEvents") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'upcomingEvents',
            index: state.index
        };
    }
    else if(state.page == "photoGallery") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'photoGallery',
            deleteTitle: document.getElementById("photoTitleField").value
        };
    }
    else if(state.page == "musicAndVideos") {
        clientData = {
            password: document.getElementById("serverPasswordField").value,
            action: 'delete',
            page: 'musicAndVideos',
            deleteTitle: document.getElementById("videoTitleField").value
        };
    }
    window.confirm(clientData);
    fetch(document.getElementById("serverUrlField").value, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({clientData})
    }).then(response => response.json())
        .then(serverData => {
            console.log("post: ");
            console.log(serverData);
            resetUI();
        });
}

function processPostRequest() {
    if(state.action == "add")
        processPostAddRequest();
    else if(state.action == "edit")
        processPostEditRequest();
    else if(state.action == "delete")
        processPostDeleteRequest();
}

function processConfirm() {
    if(!state.processAction) { //this is set to true in the following functions
        if(state.page == "select")
            return;
        if((state.page == "upcomingEvents" && state.action == "add"))
            setUpcomingEventsForm("null");
        else if((state.page == "photoGallery" && state.action == "add"))
            setPhotoGalleryForm("null");
        else if((state.page == "musicAndVideos" && state.action == "add"))
            setMusicAndVideosForm("null");
        else
            setGetRequestForm(); //get requests are only initiated when state.processAction == false
    }
    else if(!state.isStageTwo && state.action != "add") { //if state.processAction == true, also
        processGetRequest();
    }
    else if(state.processAction && ((state.isStageTwo) || (state.action == "add"))) {
        processPostRequest();
    }
}

function setState(setPage, setAction) {
    document.getElementById("displayState").innerHTML = "selected state: page: " + setPage + " action: " + setAction;
    state = {
        page: setPage,
        action: setAction,
        index: "null",
        isStageTwo: false,
        processAction: false
    };
}

function selectUpcomingEventsAdd() {
    setState("upcomingEvents", "add");
}

function selectUpcomingEventsEdit() {
    setState("upcomingEvents", "edit");
}

function selectUpcomingEventsDelete() {
    setState("upcomingEvents", "delete");
}

function selectPhotoGalleryAdd() {
    setState("photoGallery", "add");
}

function selectPhotoGalleryEdit() {
    setState("photoGallery", "edit");
}

function selectPhotoGalleryDelete() {
    setState("photoGallery", "delete");
}

function selectMusicAndVideosAdd() {
    setState("musicAndVideos", "add");
}

function selectMusicAndVideosEdit() {
    setState("musicAndVideos", "edit");
}

function selectMusicAndVideosDelete() {
    setState("musicAndVideos", "delete");
}

selectUpcomingEventsAddButtonHandle.addEventListener("click", selectUpcomingEventsAdd);
selectUpcomingEventsEditButtonHandle.addEventListener("click", selectUpcomingEventsEdit);
selectUpcomingEventsDeleteButtonHandle.addEventListener("click", selectUpcomingEventsDelete);
selectPhotoGalleryAddButtonHandle.addEventListener("click", selectPhotoGalleryAdd);
selectPhotoGalleryEditButtonHandle.addEventListener("click", selectPhotoGalleryEdit);
selectPhotoGalleryDeleteButtonHandle.addEventListener("click", selectPhotoGalleryDelete);
selectMusicAndVideosAddButtonHandle.addEventListener("click", selectMusicAndVideosAdd);
selectMusicAndVideosEditButtonHandle.addEventListener("click", selectMusicAndVideosEdit);
selectMusicAndVideosDeleteButtonHandle.addEventListener("click", selectMusicAndVideosDelete);

confirmButtonHandle.addEventListener("click", processConfirm);