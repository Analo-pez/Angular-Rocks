import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
    name: 'embed'
})
export class Embed implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }


    transform(_url: any): SafeResourceUrl {
        if (!_url) { return ''; }
        if (_url) {
            _url = _url.replace('watch?v=', 'embed/');
        }

        return this.sanitizer.bypassSecurityTrustResourceUrl(_url);
    }
}

