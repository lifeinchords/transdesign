set :haml, :layout_engine => :erb


set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

=======
# Change the CSS directory
# set :css_dir, "alternative_css_directory"

# Change the JS directory
# set :js_dir, "alternative_js_directory"

# Change the images directory
# set :images_dir, "alternative_image_directory"


# pretty urls, requires Rack server
# require "rack/contrib/try_static"
# use Rack::TryStatic, :root => "build", :urls => %w[/], :try => ['.html']


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end