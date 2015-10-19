(function(){
Template.__checkName("searchResult");
Template["searchResult"] = new Template("Template.searchResult", (function() {
  var view = this;
  return [ HTML.Raw("<!-- Page heading -->\n    "), Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("Search page"),
      category: Spacebars.call("Other pages")
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("pageHeading"));
  }), "\n\n    ", HTML.DIV({
    "class": "wrapper wrapper-content animated fadeInRight"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n                ", HTML.DIV({
    "class": "ibox float-e-margins"
  }, "\n                    ", HTML.DIV({
    "class": "ibox-content"
  }, "\n                        ", HTML.Raw('<h2>\n                            2,160 results found for: <span class="text-navy">“Admin Theme”</span>\n                        </h2>'), "\n                        ", HTML.Raw("<small>Request time  (0.23 seconds)</small>"), "\n\n                        ", HTML.DIV({
    "class": "search-form"
  }, "\n                            ", HTML.FORM({
    action: function() {
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({
        route: "dashboard1"
      }));
    },
    method: "get"
  }, "\n                                ", HTML.Raw('<div class="input-group">\n                                    <input type="text" placeholder="Admin Theme" name="search" class="form-control input-lg">\n                                    <div class="input-group-btn">\n                                        <button class="btn btn-lg btn-primary" type="submit">\n                                            Search\n                                        </button>\n                                    </div>\n                                </div>'), "\n\n                            "), "\n                        "), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">INSPINIA IN+ Admin Theme</a></h3>\n                            <a href="#" class="search-link">www.inspinia.com/inspinia</a>\n                            <p>\n                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites\n                                still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">WrapBootstrap - Bootstrap Themes &amp; Templates</a></h3>\n                            <a href="#" class="search-link">https://wrapbootstrap.com/‎</a>\n                            <p>\n                                WrapBootstrap is a marketplace for premium Bootstrap themes and templates. Impress your clients and visitors while using a single, rock-solid foundation.\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">WrapBootstrap | Facebook</a></h3>\n                            <a href="#" class="search-link">https://www.facebook.com/wrapbootstrap‎</a>\n                            <p>\n                                WrapBootstrap. 13672 likes · 508 talking about this. Marketplace for premium Bootstrap themes and templates. https://wrapbootstrap.com/\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">Wrapbootstrap - Quora</a></h3>\n                            <a href="#" class="search-link">www.quora.com/Wrapbootstrap‎‎</a>\n                            <p>\n                                If you are familiar with using any other HTML/CSS themes or WordPress themes then you shouldn\'t have any problems. If you have some experience using the ...\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">Newspaper Template - Wrapbootstrap Free download ...</a></h3>\n                            <a href="#" class="search-link">https://wrapbootstrap.com/‎‎</a>\n                            <p>\n                                What\'s black, white and red all over? The answer is Newspaper. A stylish magazine/news style theme inspired by black and white newsprint. The theme is.\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="search-result">\n                            <h3><a href="#">Admin Themes Wrapbootstrap</a></h3>\n                            <a href="#" class="search-link">https://wrapbootstrap.com/themes/admin‎‎</a>\n                            <p>\n                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n                            </p>\n                        </div>'), "\n                        ", HTML.Raw('<div class="hr-line-dashed"></div>'), "\n                        ", HTML.Raw('<div class="text-center">\n                            <div class="btn-group">\n                                <button class="btn btn-white" type="button"><i class="fa fa-chevron-left"></i></button>\n                                <button class="btn btn-white">1</button>\n                                <button class="btn btn-white  active">2</button>\n                                <button class="btn btn-white">3</button>\n                                <button class="btn btn-white">4</button>\n                                <button class="btn btn-white">5</button>\n                                <button class="btn btn-white">6</button>\n                                <button class="btn btn-white">7</button>\n                                <button class="btn btn-white" type="button"><i class="fa fa-chevron-right"></i> </button>\n                            </div>\n                        </div>'), "\n                    "), "\n                "), "\n            "), "\n        "), "\n    ") ];
}));

})();