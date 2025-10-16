basic.forever(function () {
    if (lineSensors.checkSensor(IRSensor.LEFT, IRColour.BLACK)) {
        robot.elecfreaksCuteBot.start()
    } else {
        motobit.enable(MotorPower.ON)
    }
})
