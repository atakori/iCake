const mergemeetings = require('./mergeMeeting');

test('returns the appropriate meeting ranges', () => {
	expect(mergemeetings([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}])).toEqual({startTime: 1, endTime: 3})
})