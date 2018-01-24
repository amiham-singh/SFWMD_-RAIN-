import schedule
import time
import os 
os.chdir("C:\\Users\\Family New\\Desktop\\gif")
import datetime
import requests

def job():
    url = "https://my.sfwmd.gov/sfwmd/common/images/weather/raindar_pixels_7am.gif"
#basefilename = baseurl[baseurl.rfind("/")+1:] + "_"
    now = datetime.datetime.now()
    stamp = datetime.datetime.strftime(now, "_%H%M")
    filename = "pixel" + stamp + "." + "gif"
#for format in ("gif", "kml"):
#    filename = "data/" + format + basefilename + format
#    url = baseurl + "." + format
#    if format == "kml":
#        url = url.replace("plots/storm_", "plots/storm")

    r = requests.get(url)
    with open(filename, "wb") as f:
      f.write(r.content)
    print(filename)

schedule.every(10).minutes.do(job)

while True:
    schedule.run_pending()
    time.sleep(600)
    
