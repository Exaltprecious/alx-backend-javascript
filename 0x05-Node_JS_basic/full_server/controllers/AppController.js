/**
 * Contains the miscellaneous route handlers.
 * @author Eneh Chinelo Peculiar <https://github.com/Exaltprecious>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
	}

export default AppController;
module.exports = AppController;
