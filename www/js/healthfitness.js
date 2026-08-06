var exec = require('cordova/exec');

exports.requestHealthPermissions = function (success, error, params) {

    const {
        customPermissions,
        allVariables,
        fitnessVariables,
        healthVariables,
        profileVariables,
        workoutVariables
    } = params;

    var args = [customPermissions, allVariables, fitnessVariables, healthVariables, profileVariables, workoutVariables];

    exec(success, error, 'OSHealthFitnessPlugin', 'requestHealthPermissions', args);
};

exports.getData = function (success, error, params) {
    exec(success, error, 'OSHealthFitnessPlugin', 'getData', [params]);
};

exports.getWorkoutData = function (success, error, params) {
    exec(success, error, 'OSHealthFitnessPlugin', 'getWorkoutData', [params]);
};

exports.writeData = function (success, error, variable, value) {
    exec(success, error, 'OSHealthFitnessPlugin', 'writeData', [variable, value]);
};

exports.getLastRecord = function (success, error, variable) {
    exec(success, error, 'OSHealthFitnessPlugin', 'getLastRecord', [variable]);
};

exports.setBackgroundJob = function (success, error, params) {
    exec(success, error, 'OSHealthFitnessPlugin', 'setBackgroundJob', [params]);
};

exports.deleteBackgroundJob = function (success, error, params) {
    exec(success, error, 'OSHealthFitnessPlugin', 'deleteBackgroundJob', [params]);
};

exports.listBackgroundJobs = function (success, error) {
    exec(success, error, 'OSHealthFitnessPlugin', 'listBackgroundJobs');
};

exports.updateBackgroundJob = function (success, error, params) {
    exec(success, error, 'OSHealthFitnessPlugin', 'updateBackgroundJob', [params]);
};

exports.disconnectFromHealthConnect = function (success, error) {
    exec(success, error, 'OSHealthFitnessPlugin', 'disconnectFromHealthConnect');
};

exports.openHealthConnect = function (success, error) {
    exec(success, error, 'OSHealthFitnessPlugin', 'openHealthConnect');
};
