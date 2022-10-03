use strict;
use warnings;

package RT::Extension::Scrips2;

our $VERSION = '0.01';

RT->AddStyleSheets( "rt-extension-scrips2.css" );

RT->AddJavaScript(
    "rt-extension-scrips2.js",
    "ace.js",
    "ext-language_tools.js",
    "theme-chrome.js",
    "mode-javascript.js"
);

=head1 NAME

RT-Extension-Scrips2 - Modern RT::Scrips interface.

=head1 DESCRIPTION

Improve on the RT::Scrips UI for a more modern feel!

Add a web IDE that supports multiple programming languages as well
as a revamped UI.

=head1 RT VERSION

Works with RT 5.

=head1 INSTALLATION

=over

=item C<perl Makefile.PL>

=item C<make>

=item C<make install>

May need root permissions

=item Edit your F</opt/rt4/etc/RT_SiteConfig.pm>

Add this line:

    Plugin('RT::Extension::Scrips2');

=item Clear your mason cache

    rm -rf /opt/rt4/var/mason_data/obj

=item Restart your webserver

=back

=head1 AUTHOR

Best Practical Solutions, LLC E<lt>craig@kaiserengineering.ioE<gt>

=for html <p>All bugs should be reported via email to <a
href="mailto:bug-RT-Extension-Scrips2@rt.cpan.org">bug-RT-Extension-Scrips2@rt.cpan.org</a>
or via the web at <a
href="http://rt.cpan.org/Public/Dist/Display.html?Name=RT-Extension-Scrips2">rt.cpan.org</a>.</p>

=for text
    All bugs should be reported via email to
        bug-RT-Extension-Scrips2@rt.cpan.org
    or via the web at
        http://rt.cpan.org/Public/Dist/Display.html?Name=RT-Extension-Scrips2

=head1 LICENSE AND COPYRIGHT

This software is Copyright (c) 2022 by Craig Kaiser

This is free software, licensed under:

  The GNU General Public License, Version 2, June 1991

=cut

1;
