# Ignore the noisey error on command line.
Slim::Engine.disable_option_validator!
set :slim, { :pretty => true, :sort_attrs => false, :format => :html }

# Activate
activate :i18n, :mount_at_root => :ja
activate :livereload


# Set proper directories
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layouts_dir, 'layouts'
set :partials_dir, 'partials'




# Markdown settings
#
# Reason why I use "kramdown":
# http://benhollis.net/blog/2013/10/20/maruku-is-obsolete/
# http://stackoverflow.com/questions/2017001/adding-a-class-attribute-to-a-hyperlink-in-markdown
set :markdown, :tables => true, :autolink => true, :gh_blockcode => true, :fenced_code_blocks => true, :with_toc_data => true, :smartypants => true
set :markdown_engine, :kramdown


# Feed
# page "/feed.xml", :layout => false

# Middleman-blog tasks
# activate :blog do |blog|
#     blog.layout = "layout_partners"
#     blog.prefix = "{lang}"
#     blog.permalink = "partners/{title}"
#     blog.summary_separator = /_readmore/
#     blog.default_extension = ".md"
# end


# Timezone used rss feed time stamp and article published date
Time.zone = "Tokyo"


activate :directory_indexes
set :relative_links, true


# Build tasks
configure :build do

    # Use relative URLs
    activate :relative_assets

end

