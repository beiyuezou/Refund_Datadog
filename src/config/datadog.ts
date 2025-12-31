import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import { reactPlugin } from '@datadog/browser-rum-react';

// Import React plugin for RUM

/**
 * Initialize Datadog Real User Monitoring and Logging
 * Call this before rendering React app
 */
export const initDatadog = () => {
    const applicationId = (import.meta as any).env.VITE_DATADOG_APPLICATION_ID;
    const clientToken = (import.meta as any).env.VITE_DATADOG_CLIENT_TOKEN;
    const site = (import.meta as any).env.VITE_DATADOG_SITE || 'datadoghq.com';
    const env = (import.meta as any).env.VITE_DATADOG_ENV || (import.meta as any).env.MODE || 'development';
    const service = (import.meta as any).env.VITE_DATADOG_SERVICE || 'refund';
    const version = '1.0.0';

    // Skip initialization if required credentials are missing
    if (!applicationId || !clientToken) {
        console.warn('Datadog credentials not found. Monitoring disabled.');
        return;
    }

    // Initialize RUM (Real User Monitoring) with React plugin
    datadogRum.init({
        applicationId,
        clientToken,
        site,
        service,
        env,
        version,
        sessionSampleRate: 100,
        sessionReplaySampleRate: 20,
        defaultPrivacyLevel: 'mask-user-input',
        plugins: [reactPlugin({ router: true })],
    });

    // Initialize Logs
    datadogLogs.init({
        clientToken,
        site,
        service,
        env,
        forwardErrorsToLogs: true,
        sessionSampleRate: 100,
    });

    // Start session replay recording
    datadogRum.startSessionReplayRecording();

    console.log('✅ Datadog monitoring initialized with React plugin');
};

/**
 * Track custom metric/event
 */
export const trackEvent = (name: string, context?: Record<string, any>) => {
    datadogRum.addAction(name, context);
};

/**
 * Track error
 */
export const trackError = (error: Error, context?: Record<string, any>) => {
    datadogRum.addError(error, context);
    datadogLogs.logger.error(error.message, context);
};

/**
 * Set user context
 */
export const setUser = (userId: string, userInfo?: Record<string, any>) => {
    datadogRum.setUser({
        id: userId,
        ...userInfo,
    });
};

/**
 * Track timing metric
 */
export const trackTiming = (name: string, duration: number, context?: Record<string, any>) => {
    datadogRum.addTiming(name, duration);
    if (context) {
        datadogRum.addAction(name, { ...context, duration });
    }
};
