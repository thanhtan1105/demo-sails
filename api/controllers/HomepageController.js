/**
 * HomepageController
 *
 * @description :: Server-side logic for managing homepages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (request, response) {
    return response.view('homepage', {
      currentDate: (new Date()).toString()
    })
  }
};

