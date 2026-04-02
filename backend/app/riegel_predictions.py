#Globals
targetEvents = {
    "800m" : 800,
    "1500m" : 1500,
    "1600m" : 1600,
    "Mile" : 1609,
    "3000m" : 3000,
    "3200m" : 3200,
    "2 Mile" : 3218,
    "3 Mile" : 4827,
    "5k" : 5000,
    "10k" : 10000
}


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


def formatSeconds(hours, minutes, seconds):
    if(hours == 0):
        return f"{minutes}:{seconds:02}"
    else:
        return f"{hours}:{minutes:02}:{seconds:02}"


def riegelPredict(time1, distance1, distance2):
    return time1 * (distance2 / distance1) ** 1.06
    

def generatePredictions(timeStr, distance1):
    inputSeconds = timeToSeconds(timeStr)
    predictions = []
    
    for eventName, distance2 in targetEvents.items():
        predictedSeconds = riegelPredict(inputSeconds, distance1, distance2)
        formattedTime = secondsToTime(predictedSeconds)
        
        predictions.append({
            "distance": eventName,
            "predictedTime" : formattedTime
        })
    
    return predictions