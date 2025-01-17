import sites from './user_sites.js'

const options = {
    includeScore: false,
    threshold: 0.3,
    keys: ['name', 'year', 'website']
}

const fuse = new Fuse(sites, options)

function fillSiteTable(type){
    const searchBar = document.getElementById("searchbar");
    const divSiteList = document.getElementById("searchbardiv");
    let siteArray = [];

    if (type == "fromLoading" || type == "fromSearch" && !searchBar.value) {
        siteArray = sites;
    } else if (type =="fromSearch" && searchBar.value){
        let results = [];

        if (Number.parseInt(searchBar.value)) {
            results = fuse.search("=" + searchBar.value);
        } else {
            results = fuse.search(searchBar.value);
        }
        for (let i = 0; i < results.length; i++) {
            siteArray.push(results[i]["item"]);
        }
    }
    if (document.getElementById("mainTable")) {
        const oldTable = document.getElementById("mainTable");
        oldTable.remove();
    }
    let htmlContent = [];
    htmlContent.push("<ul class=\"sticky\" id=\"mainTable\">");
    for (let i = 0; i < siteArray.length; i++) {
        let cleanSite = new URL(siteArray[i]["website"]);
        let host = cleanSite.hostname;
        if (host.substring(0, 4) === "www.") {
            host = host.substring(4, host.length);
        }
        htmlContent.push("<li><a target=\"_blank\" href=\"" + cleanSite.toString() + "\">" + host + "</a></li>");
    }
    htmlContent.push("</ul>");
    divSiteList.insertAdjacentHTML(
        "afterend",
        htmlContent.join('')
    );
}
window.fillSiteTable = fillSiteTable;