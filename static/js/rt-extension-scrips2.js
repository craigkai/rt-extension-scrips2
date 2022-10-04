const ticket_obj_re = /\$self->TicketObj->.*[^\(\)\->]/;
const transaction_obj_re = /\$self->TransactionObj->.*[^\(\)\->]/;

var customACECompleter = {
  getCompletions: function (editor, session, pos, prefix, callback) {
    current_line = session.getValue();

    if (ticket_obj_re.test(current_line)) {
      callback(null, RT.Config.TicketFunctions);
    } else if (transaction_obj_re.test(current_line)) {
      callback(null, RT.Config.TransactionFunctions);
    }
  },
};

// Hook up ACE editor to all textareas with data-editor attribute
jQuery(function () {
  if (
    window.location.href.indexOf("/Admin/Scrips/Modify") != -1 ||
    window.location.href.indexOf("/Admin/Scrips/Create") != -1
  ) {

    jQuery("select[name='ScripCondition']").on('change', function() {
      var selected_option_value = jQuery(this).find(":selected").text();
      let condition_container = jQuery("#custom-condition-code-container");

      if ( selected_option_value == "User Defined\n" ) {
        condition_container.show();
      } else {
        condition_container.hide();
      }
    });

    jQuery("select[name='ScripAction']").on('change', function() {
      var selected_option_value = jQuery(this).find(":selected").text();

      let prep_container = jQuery("#custom-prep-code-container");
      let commit_container = jQuery("#custom-commit-code-container");

      if ( selected_option_value == "User Defined\n" ) {
        prep_container.show();
        commit_container.show();
      } else {
        prep_container.hide();
        commit_container.hide();
      }
    });

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
