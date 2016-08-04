/** Index page renderer.
 */
define(["../helper/pagination",
        "../helper/segment-viewer",
        "../helper/util"],
function(Pagination, Viewer, util) {
  function createLabelOptions(params, labels) {
    var container = document.createElement("p"),
        select = document.createElement("select"),
        option;
    {
      option = document.createElement("option");
      option.appendChild(document.createTextNode("all"));
      select.appendChild(option);
    }
    for (var i = 0; i < labels.length; ++i) {
      option = document.createElement("option");
      option.appendChild(document.createTextNode(labels[i]));
      if (labels[i] === params.label) {
        option.selected = true;
      }
      select.appendChild(option);
    }
    select.onchange = function(event) {
      window.location = util.makeQueryParams(params, {
        label: (event.target.value === "all") ? null : event.target.value
      });
    };
    container.appendChild(select);
    return container;
  }

  function render(data, params) {
    var pagination = new Pagination(data.imageURLs.length, params);
    document.body.appendChild(pagination.render());
    document.body.appendChild(createLabelOptions(params, data.labels));
    for (var i = pagination.begin(); i < pagination.end(); ++i) {
      var viewer = new Viewer(data.imageURLs[i], data.annotationURLs[i], {
                                width: (params.width || 240),
                                height: (params.height || 320),
                                colormap: data.colormap,
                                labels: data.labels,
                                excludedLegends: [0],
                                overlay: i.toString()
                              }),
          anchor = document.createElement("a");
      anchor.appendChild(viewer.container);
      anchor.href = util.makeQueryParams({ view: "edit", id: i,user:params.user });
      document.body.appendChild(anchor);
      
//alert(params.user);
var currentLocation = window.location.href;
var userName =  getParameterByName('user')
//alert(userName);
     
    }
  }
  
  //http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

  return render;
});
