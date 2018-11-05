import { createService } from '../../projects/spectator/src/lib/service';
import { WidgetDataService } from './widget-data.service';
import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  const spectator = createService({
    service: WidgetService,
    mocks: [WidgetDataService]
  });

  it('should be defined', () => {
    expect(spectator.service).toBeDefined();
  });
});
