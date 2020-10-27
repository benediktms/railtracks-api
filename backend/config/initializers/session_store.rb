if Rails.env == 'production'
  Rails.application.config.session_store :cookie_store,
                                         key: '_authentication_railtracks',
                                         domain: 'your domain name'
else
  Rails.application.config.session_store :cookie_store,
                                         key: '_authentication_railtracks',
                                         domain: 'http://localhost:4000'
end
