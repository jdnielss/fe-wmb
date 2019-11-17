import * as action from '../action/OrderAction'
import * as types from '../reducer/FormOrderReducer'
import fetchMock from "fetch-mock";



describe('actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('should return data when fetching', function () {
        fetchMock.getOnce('http://10.10.13.150:9090/orders', {
            body
        })
    });
})