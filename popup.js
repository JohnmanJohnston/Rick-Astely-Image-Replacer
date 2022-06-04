// We get the picture of Rick Astely with the url: https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024

var PerformReplacementImages = document.getElementById("change-color");

PerformReplacementImages.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: SetImagesToRick,
    });
});

function SetImagesToRick() {
    var Images = document.getElementsByTagName("img");
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "red";

    // document.body.style.fontFamily = "cursive";
    document.body.style.setProperty("font-family", "'Comic Sans MS', 'Comic Sans', cursive", "important");

    setInterval( () => {
            for (var i = 0; i < Images.length; i++) {
                Images[i].src = "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024";
            }

            if (window.location.href.includes("youtube")) {
                var YouTubeText = document.querySelectorAll("yt-formatted-string");
                for (var i = 0; i < YouTubeText.length; i++) {
                    YouTubeText[i].style.fontFamily = "cursive";
                }
            }
        }, 1000
    )
}
