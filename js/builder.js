'use strict';
/**
* @file Dynamicly generate the project block
* @author Donald Shen <donald930224@hotmail.com>
*/



(function () {
    function buildProjectHTML(project) {
        var projectHTML = '<article class="project"><figure><picture><source media="(min-width: 750px)" srcset="img/%img%-large.jpg" /><source media="(min-width: 500px)" srcset="img/%img%-medium.jpg" /><img src="img/%img%-small.jpg" alt="%alt%" /></picture><figcaption><a class="zocial-github" href="%url%" target="_blank"></a>%description%</figcaption></figure></article>';
        projectHTML.replace('%img%', project.img);
        projectHTML.replace('%alt%', project.alt);
        projectHTML.replace('%url%', project.url);
        projectHTML.replace('%description%', project.description);
        return projectHTML;
    }

    var content = $('content');
    projects.forEach(function (p) {
        content.append(buildProjectHTML(p));
    });
})();
