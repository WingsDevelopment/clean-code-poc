import { LogError, LogInfo } from './ConsoleLoggerService';
import { ILoggingService } from './ILoggingService';

export const LoggingServiceAdapter: ILoggingService = {
  LogError: LogError,
  LogInfo: LogInfo,
};
