var searchUrl = 'http://api.bing.net/qson.aspx';


$('input').on('keyup', function (evt) {
    getSearchResults($(this).val());
});


function getSearchResults(query) {
    var url = encodeURI(searchUrl + '?query=' + query + '&JsonType=callback&JsonCallback=?');

    $.ajax({
        url: url,
        dataType: 'jsonp',
    }).done(function (response) {
        render(response.SearchSuggestion.Section);
    });
}


function render(searchResult) {
    var results = $('#results');
    results.empty();
    for (var i = 0; i < searchResult.length; i++) {
        results.append(createItemHTML(searchResult[i]));
    }
}

function createItemHTML(searchItem) {
    var div = '<div><a href="https://www.bing.com/search?q='+searchItem.Text + '" target="_blank">' +
        searchItem.Text +
        '</a></div>';

    return div;
}
