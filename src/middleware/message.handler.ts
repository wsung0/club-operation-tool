import _ from 'lodash'

export const MH = {
  success: (data: any) => {
    const DC = _.get(data, 'code', 'SUCCESS')
    const DM = _.get(data, 'data', null)
    return { code: DC, data: DM }
  },
  fail: (error: object) => {
    const EC = _.get(error, 'code', 'FAIL')
    const EM = _.get(error, 'message', null)

    return { code: EC, message: EM }
  },
}
