var customACECompleter = {
  getCompletions: function (editor, session, pos, prefix, callback) {
      callback(null, [
        {
          caption: "FirstCustomFieldValue FIELD", 
          value: "FirstCustomFieldValue()",
          meta: "Return the content of the first value of CustomField FIELD for this ticket Takes a field id or name",
        },
      ]);
  },
};

// Hook up ACE editor to all textareas with data-editor attribute
jQuery(function () {
  if (
    window.location.href.indexOf("/Admin/Scrips/Modify") != -1 ||
    window.location.href.indexOf("/Admin/Scrips/Create") != -1
  ) {
    jQuery("textarea[data-editor]").each(function () {
      var textarea = jQuery(this);

      var mode = textarea.data("editor");

      var editDiv = jQuery("<div>", {
        position: "absolute",
        width: textarea.width(),
        height: textarea.height(),
        class: textarea.attr("class"),
      }).insertBefore(textarea);

      textarea.css("display", "none");

      var editor = ace.edit(editDiv[0]);

      editor.setOptions(RT.Config.AceEditorOptions);

      RT.Config.WebDefaultStylesheet;

      let $theme =
        RT.Config.WebDefaultStylesheet == "elevator-light"
          ? "solarized_light"
          : "chrome";

      editor.setTheme("ace/theme/" + $theme);
      editor.getSession().setValue(textarea.val());
      editor.getSession().setMode("ace/mode/" + mode);

      editor.completers.push(customACECompleter);

      // copy back to textarea on form submit...
      editor.getSession().on("change", function () {
        textarea.val(editor.getSession().getValue());
      });
    });
  }
});
