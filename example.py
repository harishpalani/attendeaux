import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ['http://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('attendeaux-d97bb5cbc08a.json', scope)

gc = gspread.authorize(credentials)

wks = gc.open('Test').sheet1

# print(wks.get_all_records())
# for i in range(2, 54):
#     wks.update_cell(i, 4, '=FLOOR(SUM(F' + str(i) + ':S' + str(i) + '))')

for i in range(2, 54):
    wks.update_cell(i, 5, '=MOD(SUM(F' + str(i) + ':S' + str(i) + '),1)*10')

# wks.delete_row(2)

# wks.append_row(['sup'])