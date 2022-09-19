import { LogError, LogInfo } from '../implementations/ConsoleLoggerService';
import { ILoggingService } from '../interfaces/ILoggingService';

export const LoggingServiceAdapter: ILoggingService = {
  LogError: LogError,
  LogInfo: LogInfo,
};
