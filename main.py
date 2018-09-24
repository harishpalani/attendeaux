
import webapp2, jinja2, urllib, urllib2, os, json

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

# current_folder = os.path.dirname(__file__)
# templates_folder = os.path.join(current_folder, "templates")
# JINJA_ENVIRONMENT = jinja2.Environment(loader = jinja2.FileSystemLoader(templates_folder))

class MainPage(webapp2.RequestHandler):
    def get(self):
        results_template = JINJA_ENVIRONMENT.get_template('templates/test.html')
        self.response.out.write(results_template.render())

app = webapp2.WSGIApplication([
    ('/', MainPage), #
], debug=True)
