if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store,
                                         key: '_authentication_railtracks',
                                         domain:
                                           'https://railtracks-api.herokuapp.com/'
else
  Rails.application.config.session_store :cookie_store,
                                         key: '_authentication_railtracks'
end
