const ticketMethods = [
  {
    caption: "Load",
    value: "Load",
    meta: "Load",
  },
  {
    caption: "Create (ARGS)",
    value: "Create (ARGS)",
    meta: "Create (ARGS)",
  },
  {
    caption: "OwnerGroup",
    value: "OwnerGroup",
    meta: "OwnerGroup",
  },
  {
    caption: "AddWatcher",
    value: "AddWatcher",
    meta: "AddWatcher",
  },
  {
    caption: "DeleteWatcher",
    value: "DeleteWatcher",
    meta: "DeleteWatcher",
  },
  {
    caption: "SquelchMailTo ADDRESSES",
    value: "SquelchMailTo ADDRESSES",
    meta: "SquelchMailTo ADDRESSES",
  },
  {
    caption: "UnsquelchMailTo ADDRESS",
    value: "UnsquelchMailTo ADDRESS",
    meta: "UnsquelchMailTo ADDRESS",
  },
  {
    caption: "RequestorAddresses",
    value: "RequestorAddresses",
    meta: "RequestorAddresses",
  },
  {
    caption: "AdminCcAddresses",
    value: "AdminCcAddresses",
    meta: "AdminCcAddresses",
  },
  {
    caption: "CcAddresses",
    value: "CcAddresses",
    meta: "CcAddresses",
  },
  {
    caption: "RoleAddresses",
    value: "RoleAddresses",
    meta: "RoleAddresses",
  },
  {
    caption: "Requestor",
    value: "Requestor",
    meta: "Requestor",
  },
  {
    caption: "Cc",
    value: "Cc",
    meta: "Cc",
  },
  {
    caption: "AdminCc",
    value: "AdminCc",
    meta: "AdminCc",
  },
  {
    caption:
      "IsWatcher { Type => TYPE, PrincipalId => PRINCIPAL_ID, Email => EMAIL }",
    value:
      "IsWatcher { Type => TYPE, PrincipalId => PRINCIPAL_ID, Email => EMAIL }",
    meta: "IsWatcher { Type => TYPE, PrincipalId => PRINCIPAL_ID, Email => EMAIL }",
  },
  {
    caption: "IsRequestor PRINCIPAL_ID",
    value: "IsRequestor PRINCIPAL_ID",
    meta: "IsRequestor PRINCIPAL_ID",
  },
  {
    caption: "IsCc PRINCIPAL_ID",
    value: "IsCc PRINCIPAL_ID",
    meta: "IsCc PRINCIPAL_ID",
  },
  {
    caption: "IsAdminCc PRINCIPAL_ID",
    value: "IsAdminCc PRINCIPAL_ID",
    meta: "IsAdminCc PRINCIPAL_ID",
  },
  {
    caption: "IsOwner",
    value: "IsOwner",
    meta: "IsOwner",
  },
  {
    caption: "TransactionAddresses",
    value: "TransactionAddresses",
    meta: "TransactionAddresses",
  },
  {
    caption: "QueueObj",
    value: "QueueObj",
    meta: "QueueObj",
  },
  {
    caption: "SubjectTag",
    value: "SubjectTag",
    meta: "SubjectTag",
  },
  {
    caption: "DueObj",
    value: "DueObj",
    meta: "DueObj",
  },
  {
    caption: "ResolvedObj",
    value: "ResolvedObj",
    meta: "ResolvedObj",
  },
  {
    caption: "FirstActiveStatus",
    value: "FirstActiveStatus",
    meta: "FirstActiveStatus",
  },
  {
    caption: "FirstInactiveStatus",
    value: "FirstInactiveStatus",
    meta: "FirstInactiveStatus",
  },
  {
    caption: "SetStarted",
    value: "SetStarted",
    meta: "SetStarted",
  },
  {
    caption: "StartedObj",
    value: "StartedObj",
    meta: "StartedObj",
  },
  {
    caption: "StartsObj",
    value: "StartsObj",
    meta: "StartsObj",
  },
  {
    caption: "ToldObj",
    value: "ToldObj",
    meta: "ToldObj",
  },
  {
    caption: "TimeWorkedAsString",
    value: "TimeWorkedAsString",
    meta: "TimeWorkedAsString",
  },
  {
    caption: "TimeLeftAsString",
    value: "TimeLeftAsString",
    meta: "TimeLeftAsString",
  },
  {
    caption: "TimeEstimatedAsString",
    value: "TimeEstimatedAsString",
    meta: "TimeEstimatedAsString",
  },
  {
    caption: "TotalTimeWorked",
    value: "TotalTimeWorked",
    meta: "TotalTimeWorked",
  },
  {
    caption: "TotalTimeWorkedAsString",
    value: "TotalTimeWorkedAsString",
    meta: "TotalTimeWorkedAsString",
  },
  {
    caption: "TimeWorkedPerUser",
    value: "TimeWorkedPerUser",
    meta: "TimeWorkedPerUser",
  },
  {
    caption: "TotalTimeWorkedPerUser",
    value: "TotalTimeWorkedPerUser",
    meta: "TotalTimeWorkedPerUser",
  },
  {
    caption: "Comment",
    value: "Comment",
    meta: "Comment",
  },
  {
    caption: "Correspond",
    value: "Correspond",
    meta: "Correspond",
  },
  {
    caption: "_RecordNote",
    value: "_RecordNote",
    meta: "_RecordNote",
  },
  {
    caption: "Atomic",
    value: "Atomic",
    meta: "Atomic",
  },
  {
    caption: "DryRun",
    value: "DryRun",
    meta: "DryRun",
  },
  {
    caption: "MergeInto",
    value: "MergeInto",
    meta: "MergeInto",
  },
  {
    caption: "Merged",
    value: "Merged",
    meta: "Merged",
  },
  {
    caption: "OwnerObj",
    value: "OwnerObj",
    meta: "OwnerObj",
  },
  {
    caption: "OwnerAsString",
    value: "OwnerAsString",
    meta: "OwnerAsString",
  },
  {
    caption: "SetOwner",
    value: "SetOwner",
    meta: "SetOwner",
  },
  {
    caption: "CurrentUserCanSetOwner",
    value: "CurrentUserCanSetOwner",
    meta: "CurrentUserCanSetOwner",
  },
  {
    caption: "    Rights to Set Owner",
    value: "    Rights to Set Owner",
    meta: "    Rights to Set Owner",
  },
  {
    caption: "    Parameters",
    value: "    Parameters",
    meta: "    Parameters",
  },
  {
    caption: "Take",
    value: "Take",
    meta: "Take",
  },
  {
    caption: "Untake",
    value: "Untake",
    meta: "Untake",
  },
  {
    caption: "Steal",
    value: "Steal",
    meta: "Steal",
  },
  {
    caption: "SetStatus STATUS",
    value: "SetStatus STATUS",
    meta: "SetStatus STATUS",
  },
  {
    caption: "Delete",
    value: "Delete",
    meta: "Delete",
  },
  {
    caption: "SetTold ISO [TIMETAKEN]",
    value: "SetTold ISO [TIMETAKEN]",
    meta: "SetTold ISO [TIMETAKEN]",
  },
  {
    caption: "_SetTold",
    value: "_SetTold",
    meta: "_SetTold",
  },
  {
    caption: "SeenUpTo",
    value: "SeenUpTo",
    meta: "SeenUpTo",
  },
  {
    caption: "RanTransactionBatch",
    value: "RanTransactionBatch",
    meta: "RanTransactionBatch",
  },
  {
    caption: "TransactionBatch",
    value: "TransactionBatch",
    meta: "TransactionBatch",
  },
  {
    caption: "ApplyTransactionBatch",
    value: "ApplyTransactionBatch",
    meta: "ApplyTransactionBatch",
  },
  {
    caption: "_Value",
    value: "_Value",
    meta: "_Value",
  },
  {
    caption: "Attachments",
    value: "Attachments",
    meta: "Attachments",
  },
  {
    caption: "TextAttachments",
    value: "TextAttachments",
    meta: "TextAttachments",
  },
  {
    caption: "_UpdateTimeTaken",
    value: "_UpdateTimeTaken",
    meta: "_UpdateTimeTaken",
  },
  {
    caption: "CurrentUserCanSee",
    value: "CurrentUserCanSee",
    meta: "CurrentUserCanSee",
  },
  {
    caption: "Reminders",
    value: "Reminders",
    meta: "Reminders",
  },
  {
    caption: "Transactions",
    value: "Transactions",
    meta: "Transactions",
  },
  {
    caption: "TransactionCustomFields",
    value: "TransactionCustomFields",
    meta: "TransactionCustomFields",
  },
  {
    caption: "LoadCustomFieldByIdentifier",
    value: "LoadCustomFieldByIdentifier",
    meta: "LoadCustomFieldByIdentifier",
  },
  {
    caption: "CustomFieldLookupType",
    value: "CustomFieldLookupType",
    meta: "CustomFieldLookupType",
  },
  {
    caption: "ACLEquivalenceObjects",
    value: "ACLEquivalenceObjects",
    meta: "ACLEquivalenceObjects",
  },
  {
    caption: "ModifyLinkRight",
    value: "ModifyLinkRight",
    meta: "ModifyLinkRight",
  },
  {
    caption: "Forward Transaction => undef, To => '', Cc => '', Bcc => ''",
    value: "Forward Transaction => undef, To => '', Cc => '', Bcc => ''",
    meta: "Forward Transaction => undef, To => '', Cc => '', Bcc => ''",
  },
  {
    caption: "CurrentUserCanSeeTime",
    value: "CurrentUserCanSeeTime",
    meta: "CurrentUserCanSeeTime",
  },
  {
    caption: "id",
    value: "id",
    meta: "id",
  },
  {
    caption: "EffectiveId",
    value: "EffectiveId",
    meta: "EffectiveId",
  },
  {
    caption: "SetEffectiveId VALUE",
    value: "SetEffectiveId VALUE",
    meta: "SetEffectiveId VALUE",
  },
  {
    caption: "Queue",
    value: "Queue",
    meta: "Queue",
  },
  {
    caption: "SetQueue VALUE",
    value: "SetQueue VALUE",
    meta: "SetQueue VALUE",
  },
  {
    caption: "Type",
    value: "Type",
    meta: "Type",
  },
  {
    caption: "SetType VALUE",
    value: "SetType VALUE",
    meta: "SetType VALUE",
  },
  {
    caption: "Owner",
    value: "Owner",
    meta: "Owner",
  },
  {
    caption: "SetOwner VALUE",
    value: "SetOwner VALUE",
    meta: "SetOwner VALUE",
  },
  {
    caption: "Subject",
    value: "Subject",
    meta: "Subject",
  },
  {
    caption: "SetSubject VALUE",
    value: "SetSubject VALUE",
    meta: "SetSubject VALUE",
  },
  {
    caption: "InitialPriority",
    value: "InitialPriority",
    meta: "InitialPriority",
  },
  {
    caption: "SetInitialPriority VALUE",
    value: "SetInitialPriority VALUE",
    meta: "SetInitialPriority VALUE",
  },
  {
    caption: "FinalPriority",
    value: "FinalPriority",
    meta: "FinalPriority",
  },
  {
    caption: "SetFinalPriority VALUE",
    value: "SetFinalPriority VALUE",
    meta: "SetFinalPriority VALUE",
  },
  {
    caption: "Priority",
    value: "Priority",
    meta: "Priority",
  },
  {
    caption: "SetPriority VALUE",
    value: "SetPriority VALUE",
    meta: "SetPriority VALUE",
  },
  {
    caption: "TimeEstimated",
    value: "TimeEstimated",
    meta: "TimeEstimated",
  },
  {
    caption: "SetTimeEstimated VALUE",
    value: "SetTimeEstimated VALUE",
    meta: "SetTimeEstimated VALUE",
  },
  {
    caption: "TimeWorked",
    value: "TimeWorked",
    meta: "TimeWorked",
  },
  {
    caption: "SetTimeWorked VALUE",
    value: "SetTimeWorked VALUE",
    meta: "SetTimeWorked VALUE",
  },
  {
    caption: "Status",
    value: "Status",
    meta: "Status",
  },
  {
    caption: "SetStatus VALUE",
    value: "SetStatus VALUE",
    meta: "SetStatus VALUE",
  },
  {
    caption: "TimeLeft",
    value: "TimeLeft",
    meta: "TimeLeft",
  },
  {
    caption: "SetTimeLeft VALUE",
    value: "SetTimeLeft VALUE",
    meta: "SetTimeLeft VALUE",
  },
  {
    caption: "Told",
    value: "Told",
    meta: "Told",
  },
  {
    caption: "SetTold VALUE",
    value: "SetTold VALUE",
    meta: "SetTold VALUE",
  },
  {
    caption: "Starts",
    value: "Starts",
    meta: "Starts",
  },
  {
    caption: "SetStarts VALUE",
    value: "SetStarts VALUE",
    meta: "SetStarts VALUE",
  },
  {
    caption: "Started",
    value: "Started",
    meta: "Started",
  },
  {
    caption: "SetStarted VALUE",
    value: "SetStarted VALUE",
    meta: "SetStarted VALUE",
  },
  {
    caption: "Due",
    value: "Due",
    meta: "Due",
  },
  {
    caption: "SetDue VALUE",
    value: "SetDue VALUE",
    meta: "SetDue VALUE",
  },
  {
    caption: "Resolved",
    value: "Resolved",
    meta: "Resolved",
  },
  {
    caption: "SetResolved VALUE",
    value: "SetResolved VALUE",
    meta: "SetResolved VALUE",
  },
  {
    caption: "LastUpdatedBy",
    value: "LastUpdatedBy",
    meta: "LastUpdatedBy",
  },
  {
    caption: "LastUpdated",
    value: "LastUpdated",
    meta: "LastUpdated",
  },
  {
    caption: "Creator",
    value: "Creator",
    meta: "Creator",
  },
  {
    caption: "Created",
    value: "Created",
    meta: "Created",
  },
  {
    caption: "FirstCustomFieldValue FIELD",
    value: "FirstCustomFieldValue()",
    meta: "Return the content of the first value of CustomField FIELD for this ticket Takes a field id or name",
  }
];

var customACECompleter = {
  getCompletions: function (editor, session, pos, prefix, callback) {
    obj = session.getTokenAt(pos.row, pos.column - 3);

    if (obj.value == "TicketObj") {
      callback(null, ticketMethods);
    }
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
