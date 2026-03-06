import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PwaInstallService } from '../../core/pwa-install.service';

@Component({
  selector: 'app-install-banner',
  templateUrl: './install-banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstallBanner {
  pwaInstall = inject(PwaInstallService);
}
