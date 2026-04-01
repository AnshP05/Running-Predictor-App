def timeToSeconds(timeStr):
    
    parsedStr = timeStr.split(":")
    totalSeconds = 0
    position = 0
    
    for item in reversed(parsedStr):
        totalSeconds += int(item) * (60 ** position)
        position += 1
        
    return totalSeconds

def secondsToTime(totalSeconds):
    totalSeconds = round(totalSeconds)
    
    hours = totalSeconds // 3600
    minutes = (totalSeconds % 3600) // 60
    seconds = totalSeconds % 60
    
    return formatSeconds(hours, minutes, seconds)
    
    return time

def formatSeconds(hours, minutes, seconds):
    if(hours == 0):
        return f"{minutes:02}:{seconds:02}"
    else:
        return f"{hours}:{minutes}:{seconds:02}"


def riegelPredict(time1, distance1, distance2):
    time2 = 0
    
    return time2

def generatePredictions(timeStr, distance1):
    
    
    return