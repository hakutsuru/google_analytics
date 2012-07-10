
callback_busy = "https://cool.io?oauth=aeibae"
callback_bare = "https://cool.io"


def add_ga_to_callback(url,source)
  # ga == google analytics
  required_suffix = ''
  required_suffix += 'utm_source=' + source
  required_suffix += '&utm_medium=web'
  required_suffix += '&utm_name=callback_url'
  parameters_exist = ( url.include? "?" )
  unless url.include? required_suffix
    if parameters_exist
      url += "&"
    else
      url += "?"
    end
    url += required_suffix
  end
  return url
end


puts "Appending Google Tracking to Callbacks..."
puts ""
puts callback_bare
puts add_ga_to_callback(callback_bare,'myspots')
puts ""
puts callback_busy
puts add_ga_to_callback(callback_busy,'trendster')



