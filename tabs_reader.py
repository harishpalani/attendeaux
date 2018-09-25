import gspread
import csv
from oauth2client.service_account import ServiceAccountCredentials

scope = ['http://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']

credentials = ServiceAccountCredentials.from_json_keyfile_name('attendeaux-d97bb5cbc08a.json', scope)

gc = gspread.authorize(credentials)

wks = gc.open('Special Topics Attendance').sheet1

attendance_file = open('test.txt', 'r')

ls = []
ls += [1] * 54

# text = attendance_file.read().trim('\t')
student_list = list(csv.reader(open('test.txt', 'rb'), delimiter='\t'))

for line in student_list:
    ls[int(line[0])] = 0

for i in range(2, 54):
    wks.update_cell(i, 6, ls[i])