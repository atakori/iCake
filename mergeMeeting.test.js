const mergeMeetings = require('./mergeMeeting');

test('returns the appropriate meeting ranges', () => {
	expect(mergeMeetings([{startTime: 2, endTime: 3}, {startTime: 1, endTime: 2}])).toEqual([{startTime: 1, endTime: 3}])
	expect(mergeMeetings([{startTime: 2, endTime: 3}, {startTime: 1, endTime: 3}, {startTime: 4, endTime: 5}])).toEqual([{startTime: 1, endTime: 3}, {startTime: 4, endTime: 5}])
})