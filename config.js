// const api = 'http://localhost:3000/api/';
const api = "https://extremecompetitions.com/api/";
// export const image = 'http://localhost:3000/game/';
export const image = "https://extremecompetitions.com/public/game/";
export const config = {
	login: api + 'auth',
	register: api + 'user',
	getCurrentGames: api + 'game/current',
	getGame: api + 'game/single/',
	me: api + 'user/me',
	getAllGames: api + 'game/all',
	createGame: api + 'game',
	createWinner: api + 'game/winner/add',
	getWinners: api + 'game/winner/getByMonth',
	buyTicket: api + 'play',
	getTakenTickets: api + 'play/tickets/',
	deleteGame: api + 'game/remove/',
	editGame: api + 'game/edit',
	createTestimonial: api + 'game/testimonial/add',
	getAllTestimonial: api + 'game/testimonial/read',
	deleteTestimonial: api + 'game/testimonial/delete/',
}